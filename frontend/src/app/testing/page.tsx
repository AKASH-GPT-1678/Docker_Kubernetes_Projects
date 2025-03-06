"use client";
import React from 'react'
import Linechart from '@/Components/Linechart'
import Chatbot from '@/Components/Chatbot'
import Barchart from '@/Components/Barchart';
import Warning from '@/Components/Warning'
import IOSSwitch from '@mui/material/Switch';
import { Lanechart } from '@/Components/Allthree';
import { Label } from 'recharts';
const page = () => {
  const [firstdiv , setfirstdiv ] = React.useState("bg-blue-300")
  const [seconddiv , setseconddiv ] = React.useState("ml-auto")

  const Onoff = () => {
    if (firstdiv === "bg-blue-300") {
      setfirstdiv("bg-gray-400");
    } else {
      setfirstdiv("bg-blue-300");
    }
  
    if (seconddiv == "ml-auto") {
      setseconddiv("ml-0");
    } else {
      setseconddiv("ml-auto");
    }
  };
  



  return (
    <div>
        {/* <Linechart/> */}
        {/* <Barchart/> */}
      {/* <Lanechart/> */}

    <div onClick={Onoff}>
       <div className={`
       rounded-lg h-[30px] w-[60px] bg-amber-300 cursor-pointer  mt-10 ml-10
       ${firstdiv}
      `}>
        
        <div className={`rounded-full h-full w-[30px] bg-blue-500 ${seconddiv} `}></div>

       </div>
       <div className='bg-gray-400'>
        hii

       </div>
    </div>

 
      
    </div>
  )
}

export default page