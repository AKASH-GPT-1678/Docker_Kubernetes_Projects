import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { Input } from './ui/input';
import { Button } from './ui/button';
const Chatbot = () => {
  const [messages , setmessage] = React.useState<string[]>([]);
  const [msg , setmssg] = React.useState("")

  const random = () => {
    messages.push(msg)
    console.log(msg)
    console.log(messages)
  }
  return (
    <div className='w-[350px] h-[450px] border-2 border-black flex flex-col'>
       
      <div className='border-2 border-black cursor-pointer '>
        <h1><RiCustomerService2Line className='ml-5'/> </h1>
        <div>
          {messages.map((msg , index) => (
            <div key={index} className='ml-auto gap-6'>
              <h2>{messages[index]}</h2>



            </div>
          ))}
        </div>
       
      </div>
      <div className='mb-5 border-2 border-black mt-64'>
        <div className='flex justify-between '>
            <Input  placeholder='Ask Anything' onChange={(e) => setmssg(e.target.value)}/>
            <Button className='bg-black text-white cursor-pointer' onClick={random}>Send</Button>
        </div>
        </div>

      
    </div>
  )
}

export default Chatbot
