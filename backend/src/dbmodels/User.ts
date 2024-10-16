import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema({
    Name :{
        type: String,
        required: true
    },
    PhoneNumber :{
        type: String,
        required: true,
        unique: true
    },
    CompanyName:{
        type : String,
        required: true
    },
    CompanyEmail:{
        type: String,
        required: true,
        unique: true
    },
    EmployeeSize:{
        type: String,
        required: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    otp:{
        type: String,
        required: false
    },
    otpExpiry:{
        type:Date,
        required:false
    }

})


const User = mongoose.model('User', userSchema);

export default User;