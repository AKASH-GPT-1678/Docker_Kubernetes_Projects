import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MessageSquareMore, MapPinCheck } from 'lucide-react';

<div className='flex flex-row justify-between'>
  <h1><MessageSquareMore />Get in Touch</h1>
  <h1><MapPinCheck />Location</h1>
</div>

const Footer = () => {
  return (
        <div className='flex flex-row justify-between w-full p-10'>
          {/* Left Side - Contact Form */}
          <div className='w-1/2'>
            <p className='text-lg font-semibold'>Get In Touch</p>
            <h2 className='text-2xl font-bold'>Connect with us for More Enquiries</h2>
            
            <div className='mt-4'>
              <div className='flex flex-col gap-2'>
                <label>Name</label>
                <Input placeholder='Enter Your Name' className='w-8/12' />
              </div>
              
              <div className='flex flex-col gap-2 mt-4'>
                <label>Email Address</label>
                <Input placeholder='abcxyz123@gmail.com' className='w-8/12' />
              </div>
              
              <div className='flex flex-col gap-2 mt-4'>
                <label>Phone Number</label>
                <Input placeholder='Enter Your Number' className='w-8/12' />
              </div>
              
              <div className='flex flex-col mt-5 w-8/12'>
                <div className='flex flex-row gap-2'>
                  <input type='checkbox' className='cursor-pointer' /> 
                  <label>
                    I agree with the terms and conditions.
                  </label>
                </div>
                
                <div className='mt-5'>
                  <Button className='w-full cursor-pointer' variant={'default'}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
    
          {/* Right Side */}
          <div className='w-1/2 flex justify-center items-center'>
            <div className='border-4 border-solid w-8/12 h-96 '>
            <div className='w-9/12 h-32 border-4 border-solid mt-5 ml-10 cursor-pointer'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120586.30923586602!2d73.0220598!3d19.181126199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf268159e3b1%3A0xf0c0e3ceb9a1d883!2sPalm%20Riveria%20%7C%20Grand%20Kausa%20City%20(GKC)!5e0!3m2!1sen!2sin!4v1740866445633!5m2!1sen!2sin"
              width="250px"
              height="120px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='mr-5 w-full'
            ></iframe>
            

            </div>
            <div className='flex flex-col gap-10 mt-5'>
                <div>
                  <h2 className='flex flex-row'> Get in Touch</h2>
                  <span> <MessageSquareMore /> acashgupta960@gmmail.com</span>
                </div>

                <div>
                  <h2 className='flex flex-row'> Location </h2>
                  <span><MapPinCheck /> Shaitan Gali Khatra Mahal </span>
                </div>
            </div>
             
            </div>
          </div>
          
        </div>
   
    
  )
}

export default Footer
//  <p>Get In Touch</p>
{/* <h2>Connect with us for More Enquiries </h2>
<div>
    <label>
        Name
    </label>
    <Input placeholder='Enter Your Name' />
</div>


<div>
<label>
        Emailadress
    </label>
    <Input placeholder='abcxyz123@gmail.com' />
</div> */}