import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import taswir from '../../public/irfan.png'
import {io} from 'socket.io-client'
const Chatroom = () => {

    const socket = io('http://localhost:5000')
    const [message , setmessage] = React.useState<string>("")
    const [messages , setmessages] = React.useState<string[]>([])

    useEffect(() => {
        // Listen for connection
        socket.on("connect", () => {
            console.log("Connected to server:", socket.id);
        });
          

        socket.emit("sendmsg" , "Duniya Badi madarchod ")
        // Listen for incoming messages
        socket.on("receiveMessage", (message) => {
            console.log("New message:", message);
            // setMessages(prevMessages => [...prevMessages, message]);  // Add new message to the state
        });

        // Cleanup function to remove listeners when component unmounts
        return () => {
            socket.off("connect");
            socket.off("receiveMessage");
        }
    }, []);  // Empty d

    const SaveandMap = () => {
        setmessages([ ...messages , message])
    }
  return (
    <div className='w-3/12  ml-auto border-2 border-black h-screen cursor-pointer relative p-2'>
        <div className='border-2 border-black h-screen ml-auto overflow-scroll'>
            {messages.map((msg , ind) => (
            <div className='flex flex-col justify-between ml-auto gap-14'>
                <h2 className='overflow-scroll'>{msg}</h2>
                <h2 className='flex ml-auto gap-6 font-bold p-6 pl-12 '>{msg}</h2>
            </div>
        
        ))}</div>
      <div className='absolute bottom-6 left-2 w-11/12 flex flex-row'>
      <Image src={taswir} alt='Imaging and disorder ' className='w-8' />
        <Input className='w-80%'  onChange={(e) => setmessage(e.target.value)}/>
        <Button className='cursor-pointer bg-black gap-5' onClick={SaveandMap}>Send</Button>
      </div>
      hii 
    </div>
  )
}

export default Chatroom
