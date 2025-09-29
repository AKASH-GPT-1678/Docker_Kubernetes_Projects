import mongoose , {Schema} from "mongoose";


const SOS = new Schema({
    name : {
        type : String
    },
    issue : {
        type : String
    },
    contact : {
        type : String,
        required : true,
        enum : ["Police" , "Fire" , "Ambulance"]
    },
    location : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["Pending" , "On-Process" , "Completed"],
        required : false,

    }


})
export const Emergency = mongoose.model("SOS", SOS)
