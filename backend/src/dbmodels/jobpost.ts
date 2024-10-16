import mongoose from "mongoose";


const jobpostSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        required: true
    },
    Valid:{
        type:Date,
        required: true
    }
})

const JobPost = mongoose.model('JobPost', jobpostSchema);

export default JobPost