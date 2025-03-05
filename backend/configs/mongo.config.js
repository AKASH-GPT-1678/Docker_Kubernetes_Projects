import mongoose from "mongoose";
import "dotenv/config"
import jwt from "jsonwebtoken"
const connectDb = async () => {
    try {
       await mongoose.connect(process.env.Mongo)
       console.log("Mera Mongo Ghar aaya oh raam ji ")
    } catch (error) {
        console.log(error);
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1); // Exit process on failure
      
    }
}


export default connectDb;