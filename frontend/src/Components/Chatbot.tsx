import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { Input } from './ui/input';
const Chatbot = () => {
  return (
    <div className='w-[350px] h-[450px] border-2 border-black'>
       
      <div className='border-2 border-black cursor-pointer'>
        <h1><RiCustomerService2Line className='ml-5'/> </h1>


       
      </div>
      <div className='bottom-5 flex flex-ro'>
            <Input/>
        </div>

      
    </div>
  )
}

export default Chatbot
