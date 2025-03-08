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

// export default Usrschema
// let regex = new RegExp