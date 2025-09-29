import * as z from 'zod';
// import Usrs

export const  Usrschema = z.object({
    name : z.string({message : "Name is required"}),
    email: z.string().email({message : "Email is required"}),
    age : z.string({message : "Age is required"}),
    passwordd : z.string().regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,  "Password must be at least 8 characters, include 1 uppercase letter and 1 number.")
    

})


type Schema = z.infer<typeof Usrschema>

export default Schema;


const complaintcate = [
    "Infrastructure",
    "Sanitation",
    "Safety",
    "Traffic",
    "Environment",
    "Others",
] as const;


export const Reportschema = z.object({
    user : z.string({message : "Name is Required Atleast "}),
    complaint : z.string({message : 'Teh compalint '}),
    type : z.enum(complaintcate),
    urgency: z.enum(["Low", "Medium", "High"], { message: "Urgency level is required" }),
    status: z.enum(["Pending", "In Progress", "Resolved"], { message: "Status is required" }),
    dateOfRegister: z.date(),
    file : z.instanceof(File),

})

export type Reproting = z.infer<typeof Reportschema>