import express, { Request,  Response } from 'express'
import {z}  from 'zod'
import mongoose from 'mongoose'
import User from '../dbmodels/User'
import { generateOTP, sendotpEmail } from '../services/email'
import jwt from 'jsonwebtoken'


const registerSchema = z.object({
    Name: z.string(),
    PhoneNumber: z.string(),
    CompanyName : z.string(),
    CompanyEmail: z.string().email(),
    EmployeeSize: z.string()
})

const Signup = async (req: Request,res: Response) : Promise<void> => {

    const check = registerSchema.safeParse(req.body);

    if(!check.success){
        res.status(401).json({msg:"Invalid input"});
        return ;
    }

    const { Name , PhoneNumber, CompanyName,CompanyEmail , EmployeeSize} = req.body;
    
    const isused = await User.findOne({
        $or:[
            {PhoneNumber: PhoneNumber},
            {CompanyEmail: CompanyEmail}
        ]
    })

    if(isused){
        res.status(401).json({msg:"Already registred with the given email or phone number "});
        return;
    }

    const otp = generateOTP();

    const newUser = await User.create({
        Name : Name,
        PhoneNumber:PhoneNumber,
        CompanyEmail:CompanyEmail,
        CompanyName:CompanyName,
        EmployeeSize: EmployeeSize,
        otp: otp,
        otpExpiry: new Date(Date.now() + 10*60*1000)
    });

    await sendotpEmail(CompanyEmail, otp);

     res.status(200).json({msg:"OTP sent to your email. Please verify"}) ;
     return;

};

const verifyOTPSchema = z.object({
    email: z.string().email(),
    otp: z.string()
});
const verifyOTP  = async (req: Request,res: Response): Promise<void> => {

    const check = verifyOTPSchema.safeParse(req.body);

    if(!check.success){
        res.status(401).json({msg:"Inavlid input data"});
        return ;
    }
   
    const { email , otp } = req.body;

    const user = await User.findOne({CompanyEmail: email});

    if(!user || user.otp !== otp || !user.otpExpiry || user.otpExpiry  < new Date()){
        res.status(400).json({msg:"Invalid or expired OTP"});
        return ;
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
      

    const payload = {
        Name: user.Name,
        id: user._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as string);

    res.status(201).json({msg:"User verified and created successfuyly", payload});
    return ;

}



export  { Signup , verifyOTP }