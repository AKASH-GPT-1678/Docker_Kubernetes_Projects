"use client";
import React from 'react'
import { Input } from '@/Components/ui/input'
import { Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation';
const Page = () => {
    const router = useRouter();
    const [email , setemail] = React.useState("")
    const [password , setpassword] = React.useState("")


    const Login= async () => {
        console.log(email)
        console.log(password)

        const response = await  axios.post('http://localhost:5000/api/users/login' , {email , password}) ;
       if(response.data == "200"){
        console.log("Data Loaded successfully ")
       }
       if(response.data.message == "Login successful"){
        router.push("/")

       }
       console.log(response.data.message)
       
    }
  return (
    <div className="flex justify-center items-center min-h-screen border-4 border-black">
        <div className='w-[300px] h-[400px] border-2  border-black'>
            <div className='mt-10'>
                <h2>Palm Riveria </h2>

            </div>
  <div className="flex flex-col items-center gap-4 mt-5">
    <label className='font-extrabold text-xl' >Email </label>
    <Input 
      type="email" 
      placeholder="Email" 
      onChange={(e) => setemail(e.target.value)} 
      className="w-64"
    />
    <label className='font-extrabold text-xl'>Password</label>
    <Input 
      type="password" 
      placeholder="Password" 
      onChange={(e) => setpassword(e.target.value)} 
      className="w-64"
    />
    <Button onClick={Login} className="w-64">Login</Button>
  </div>
  </div>
</div>

  )
}

export default Page
