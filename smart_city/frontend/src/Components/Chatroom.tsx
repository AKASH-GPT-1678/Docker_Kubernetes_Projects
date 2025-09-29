import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import taswir from '../../public/irfan.png'
import { io } from 'socket.io-client'
import { setShow } from './Redux'
// import Chatbg from '../../public/Chatbg.png'

const Chatroom = () => {

  const socket = io('http://localhost:5000');
  const [message, setmessage] = React.useState<string>("")
  const [messages, setmessages] = React.useState<string[]>([])
  const [rmessage , setrmessage] = React.useState<string[]>([])
  const [oppmsg, setoppmsg] = React.useState("")

  const date = new Date()
  const time = date.toLocaleTimeString()
  const ftime = date.getHours() + ":" + date.getMinutes()

  useEffect(() => {

    const recivemsg = (msg: any) => {
      setoppmsg(msg)
      setrmessage([...rmessage , msg])
    }

    socket.on("connection", () => {
      console.log("Connecetd To Server ")


    })

    socket.emit("sndmsg", (message))

    socket.on('recvmsg', recivemsg)





  }, [messages])
  const SaveandMap = () => {
    setmessages([...messages, message])
  }
  return (
    <div className='w-3/12  ml-auto border-2 border-black  cursor-pointer relative p-2 h-[800px]   bg-center' style={{
      backgroundImage: "url('/tassu.png')"
    }}>

<div className="border-2 border-black h-[800px] overflow-y-scroll w-full p-4 flex flex-col gap-2">
  {/* Sent Messages (Your Messages) */}
  {messages.map((msg, index) => (
    <div key={index} className="flex justify-end">
      <p className="bg-green-500 text-white p-3 rounded-lg max-w-xs ml-auto">
        {msg}
      </p>
    </div>
  ))}

  {/* Received Messages (Opponent Messages) */}
  {rmessage.map((msg, index) => (
    <div key={index} className="flex justify-start">
      <p className="bg-gray-300 text-black p-3 rounded-lg max-w-xs mr-auto">
        {msg}
      </p>
    </div>
  ))}
</div>


         
        {/* </div> */}

      {/* </div> */}


      {oppmsg}
      <div className='absolute bottom-6 left-2 w-11/12 flex flex-row'>
        <Image src={taswir} alt='Imaging and disorder ' className='w-8' />
        <Input className='w-80%' onChange={(e) => setmessage(e.target.value)} />
        <Button className='cursor-pointer bg-black gap-5' onClick={SaveandMap}>Send</Button>
      </div>
      
    </div>
  )
}

export default Chatroom


{/* <h2 className='flex ml-auto gap-6 font-bold p-3  mb-0'>{msg}</h2>
                <p className='flex ml-auto gap-6  p-3  mb-0'>{ftime}</p> */}