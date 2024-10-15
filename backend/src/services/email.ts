import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'mishraalok@gmail.com',
        pass: process.env.password
    }
})

const sendotpEmail = async (email: string, otp: string) => {
    const mailOptions = {
        from: process.env.mail,
        to: email,
        subject:'Your OTP for Registeration',
        text:`Your OTP code is ${otp}. It will expire in 10 mins`
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('OTP email sent sucessfully');
    } catch (error) {
        console.log("Error sending otp email:", error);
        
    }
};

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export  { sendotpEmail, generateOTP }