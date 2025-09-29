"use client";
import React from 'react'
import { Usrschema } from './schema'
import {useForm} from "react-hook-form";
import { Button } from './ui/button';
import { CircleCheck } from 'lucide-react';
import Qrcode from '../../public/qrcode .png'
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import Schema from './schema';
import Link from 'next/link';
import axios from 'axios';

const Signup = () => {

    const [visible , setvisible ] = React.useState(true)
    const [dataa , setdata] = React.useState<Schema>()


    const makefalse=() => {
        const Check = document.getElementById("checkbox") as HTMLInputElement | null;

        if(isValid && Check?.checked ){
            console.log("Valid form & checkbox is checked!");
            setvisible(false)

        }
        else{
            setvisible(true)
        }
    }

    const {register , handleSubmit , formState: {isValid , errors} } = useForm({
        mode : "onChange",
        resolver : zodResolver(Usrschema),
        defaultValues : {
          name : "",
          email : "",
          age : "",
          passwordd : ""

        }
        
      
    })
   
  const onSubmit = async (data : Schema) => {
        setdata(data)
        console.log(dataa)
        if(dataa){
          try {
            const response = await axios.post('http://localhost:5000/api/users/register' , dataa)
            console.log(response);
            if (response.data.message == 'User registered successfully!'){
              console.log("Har Har Shambhu ghar ghar shambhu ")
            }
          } catch (error) {
            console.error(error);
          }

        }
    }

  return (
    <div className='border-2 border-solid bg-blue-50 h-full ' >
       <div className='w-full  flex justify-center items-center h-full '>
        <div className='border-2 border-black  rounded-4xl mt-28 h-[700px] w-[1300px] justify-content-center flex flex-row '>
            <div className='w-1/2 bg-blue-600'>
              <div className='ml-5 font-extrabold'>
                <h1 className='text-2xl ml-20 text-white'>Palm Riveria</h1>
              </div>

              <div className='mt-5'>
                <h3 className='ml-20 mb-10 text-white'>The New Way to Connect</h3>
                <div className='flex flex-col gap-5 ml-10 cursor-crosshair text-white'>
                    <ul className='gap-2'>
                        <li className='flex flex-row gap-5'><CircleCheck fill='green'/>Get Access to our Properties</li>
                        <li className='flex flex-row gap-5'><CircleCheck fill='green'/>Single Destination to Connect Community</li>
                        <li className='flex flex-row gap-5'><CircleCheck fill='green'/>Get Exclusive offers on Properties</li>
                        <li className='flex flex-row gap-5'><CircleCheck fill='green'/>Get Access to our Community Forum</li>
                        <li className='flex flex-row gap-5'><CircleCheck fill='green'/>Get Tips and Guides on Real Estate</li>
                    </ul>
                </div>
              </div>
              <div className='flex flex-row mt-10  w-[350px] ml-10 mr-5  border-2 border-black cursor-pointer bg-blue-950 '>
                <h2 className='mt-15 ml-8 text-white'>Scan to book Visual Tour</h2>
                <Image src={Qrcode} alt="qrcode" className='ml-10 w-[125px] h-[125px] bg-white ' />
              </div>

            </div>

            <div className='w-1/2 h-full bg-amber-100 '>
             <div className='ml-20 '>
              
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 mt-24'>
            <h2 className='font-bold text-3xl'>Sign up </h2>
            <Input placeholder='Enter your name' className='w-6/12 mb-2' {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
            <Input type="email" placeholder='Enter your email' className='w-6/12 mb-2' {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
            <Input type="password" placeholder='Enter your password' className='w-6/12 mb-2' {...register('passwordd')} />
            {errors.passwordd && <span>{errors.passwordd.message}</span>}
            <Input type="number" placeholder='Enter your age' className='w-6/12 mb-2' {...register('age')} />
            {errors.age && <span>{errors.age.message}</span>}
            <div className='flex flex-row gap-5 mt-5'>
            <input  type='checkbox' className='cursor-pointer' id="checkbox" onClick={makefalse}/>
            <span>I agree with all the terms and Condition </span>
            
            </div>
            <Link className='mt-5 text-[8px] text-blue-500 cursor-pointer ' href="/terms">Click here to read all terms & conditions here </Link><br/>
            <Button type='submit' className='mt-8 cursor-pointer' disabled={visible} >Submit</Button>
            </form>
             </div>

            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Signup
