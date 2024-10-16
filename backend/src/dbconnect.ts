import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectdb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("Mongodb connected");
        
    
    } catch (error) {
        console.error("Mongo could not connected", error);
        
    }
}

export default connectdb