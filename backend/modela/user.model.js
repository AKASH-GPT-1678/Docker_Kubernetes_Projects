import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    name : String,
    email : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : false

    }
})


const User = mongoose.model("User" , userschema)

export default User;