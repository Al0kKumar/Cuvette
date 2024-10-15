import express, { Request, RequestHandler, Response } from 'express'
import {z}  from 'zod'
import mongoose from 'mongoose'
import User from '../dbmodels/db'
import { generateOTP, sendotpEmail } from '../services/email'


const registerSchema = z.object({
    Name: z.string(),
    PhoneNumber: z.string(),
    CompanyName : z.string(),
    CompanyEmail: z.string().email()
})

const Signup : RequestHandler  = async (req: Request,res: Response) => {

    const check = registerSchema.safeParse(req.body);

    if(!check.success){
        return res.status(401).json({msg:"Invalid input"})
    }

    const { Name , PhoneNumber, CompanyName,CompanyEmail } = req.body;
    
    const isused = await User.findOne({
        $or:[
            {PhoneNumber: PhoneNumber},
            {CompanyEmail: CompanyEmail}
        ]
    })

    if(isused){
        return res.status(401).json({msg:"Already registred with the given email or phone number "})
    }

    const otp = generateOTP();

    const newUser = await User.create({
        Name : Name,
        PhoneNumber:PhoneNumber,
        CompanyEmail:CompanyEmail,
        CompanyName:CompanyName,
        otp: otp,
        otpExpiry: new Date(Date.now() + 10*60*1000)
    });

    await sendotpEmail(CompanyEmail, otp);

    return res.status(200).json({msg:"OTP sent to your email. Please verify"}) 

};

const verifyOTP : RequestHandler = async (req: Request,res: Response) => {
   
    const { email , otp } = req.body;

    const user = await User.findOne({CompanyEmail: email});

    if(!user || user.otp !== otp || !user.otpExpiry || user.otpExpiry  < new Date()){
        return res.status(400).json({msg:"Invalid or expired OTP"})
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return res.status(200).json({msg:"user verified successfully"})

}

export  { Signup , verifyOTP }