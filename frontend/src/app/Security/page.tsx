
"use client";
import React from 'react'
import { Search, Bell, CircleChevronDown, Camera, TriangleAlert, Shield, Users } from 'lucide-react'
import { Input } from '@/Components/ui/input'
import Image from 'next/image'
import Irfan from "../../../public/irfan.png"
import Warning from '@/Components/Warning'
import { Lanechart, Barchartt } from '@/Components/Allthree'
import SwitchButton from '@/Components/Switch'
import { Button } from '@mui/material';

const page = () => {
  const [show, setshow] = React.useState(false)
  const department = ["Police Dept" , "Fire depat" , "Files Depat"]

  return (
    <div className='w-9/12 ml-auto'>
      
      {/* Top Search & Profile Section */}
      <div className='w-6/12 ml-auto h-[50px] flex items-center mt-10 gap-4'>
        <Search className='mr-2' />
        <Input type='text' placeholder='Search' className='w-5/12 pl-2 border-2 border-blue-500' />
        <div className="flex flex-row items-center gap-3">
          <Bell className="cursor-pointer" />
          <Image src={Irfan} alt='avatar' width={50} height={50} className='ml-2' />
          <h4>Name</h4>
          <CircleChevronDown className='cursor-pointer border-2 border-black' onClick={() => setshow(!show)} />
        </div>
      </div>

      {/* Security Management Section */}
      <div className="mt-5">
        <h1>Security Management</h1>
        <p>Monitor and manage city security</p>
      </div>

      {/* Warning Component */}
      <div className='mt-8'>
        <Warning color={"amber"} />
      </div>

      {/* Security Features Grid */}
      <div className='grid grid-cols-4 gap-4 bg-white cursor-pointer mt-5'>
        {[{ Icon: Shield, color: "bg-blue-400" }, { Icon: Camera, color: "bg-yellow-400" },
        { Icon: TriangleAlert, color: "bg-red-400" }, { Icon: Users, color: "bg-green-400" }]
          .map(({ Icon, color }, index) => (
            <div key={index} className='w-[200px] h-[150px] border-2 border-black flex items-center justify-center'>
              <div className='flex flex-col items-center'>
                <Icon size={50} fill="white" className={`p-2 ${color}`} />
                <p className='mt-5'>Hi from last month</p>
              </div>
            </div>
          ))}
      </div>

      {/* Security Map Section */}
      <div className='mt-5'>
        <h1>Security Map</h1>
        <p>Real-time security conditions across the city</p>
        <div className='bg-gray-200 w-11/12 h-[300px] mt-5 cursor-pointer'></div>
      </div>

      {/* Charts Section */}
      <div className='grid grid-cols-2 gap-2 mt-5'>
        <div className='w-full h-[420px] border-2 border-black'>
          <Lanechart />
        </div>
        <div className='w-10/12 h-[420px] border-2 border-black'>
          <Barchartt />
        </div>
      </div>

      {/* Security Control Panel */}
      <div className='mt-5'>
        <h1>Security Control Panel</h1>
        <div className='flex flex-row gap-4'>

          {/* Emergency Response */}
          <div className='w-5/12'>
            <p>Emergency Response</p>
            <div className='grid grid-rows-3 gap-2'>
              {["Police Department", "Fire Department", "Medical Services"].map((dept, idx) => (
                <div key={idx} className='border-3 border-amber-300  h-20 gap-5'>
                  <h2>{dept}</h2>
                 <Button className='mt-6'>{`Dispatch ${department[idx]}`}</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Emergency Response */}
          <div className='w-5/12'>
            <p>Not So Emergency Response</p>
            <div className='flex flex-col gap-4'>

              {/* Toggle Options */}
              {["Automatic Threat Detection", "Facial Recognition", "License Plate Recognition", "Emergency Broadcast System"]
                .map((title, idx) => (
                  <div key={idx} className="flex items-center justify-between border-2 border-black p-3 cursor-pointer">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <SwitchButton />
                  </div>
                ))}

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default page
