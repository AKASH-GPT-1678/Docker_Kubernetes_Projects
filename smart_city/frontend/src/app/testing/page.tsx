"use client";
import React from 'react'

import Chatroom from '@/Components/Chatroom';
import Chatbot from '@/Components/Chatbot';
import Traffic from '../traffic/traffic';
import dynamic from 'next/dynamic';
// import Gmaps from '@/Components/Gmaps';
import { Weekly } from '@/Components/Trafficchat';
import Parking from '@/Components/Parking';
import { Formofaci } from '@/Components/Servicedrop';
import axios from 'axios'

// import { Label } from 'recharts';
const page = () => {


  const Sendfile = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const fileinput = document.getElementById('files') as HTMLInputElement;

    if(!fileinput){
      alert("Bhai baksa khali Hia ")
    }
    console.log("xollectd")
    const file = fileinput?.files?.[0] as File;

    const formdata = new FormData();
    console.log("Data is Apapended")
    formdata.append('file' , file)
    try {
    
       const send = await axios.post('http://localhost:5000/api/users/upload' ,formdata )
       console.log((await send).data)
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    <div>

      {/* 
     <Parking/> */}
     {/*  */}
     {/* <Formofaci/> */}
    
    <form onSubmit={Sendfile}>
      <input type='file' placeholder='Add Your File here' id='files'/>
       <button type='submit'  >Submit Here </button>
    </form>


    </div>
  )
}

export default page
