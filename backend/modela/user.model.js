import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : false

    },
    password : {
        type : String,
        required : true
    }
})


const User = mongoose.model("User" , userschema)

export default User;