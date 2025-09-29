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
    },
    

})

export const Luser = mongoose.model("Luser" , Userrr)


const Reportt = new Schema({
    user : {
        type : String
        
    },
    complaint : {

    },
    type : {

    },
    urgency: {

    },
    status : {
       
    },
    dateOfRegister :{

    }


})

export const Report = mongoose.model("Report" , Reportt)

// user : z.string({message : "Name is Required Atleast "}),
// complaint : z.string({message : 'Teh compalint '}),
// type : z.enum(complaintcate),
// urgency: z.enum(["Low", "Medium", "High"], { message: "Urgency level is required" }),
// status: z.enum(["Pending", "In Progress", "Resolved"], { message: "Status is required" }),
// dateOfRegister: z.date(),

