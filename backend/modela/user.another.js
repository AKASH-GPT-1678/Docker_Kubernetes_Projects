import mongoose , {Schema}from "mongoose";


const Userrr = new Schema({
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

const Export = mongoose.model("Luser" , Userrr)

export default Export
