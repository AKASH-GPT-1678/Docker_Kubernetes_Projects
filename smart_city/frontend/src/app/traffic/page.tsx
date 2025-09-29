"use client";
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/Components/ui/input'
import { Bell } from 'lucide-react'
import Image from 'next/image'
import { CircleChevronDown } from 'lucide-react'
import Irfan from "../../../public/irfan.png"
import Warning from '@/Components/Warning';
import { Car } from 'lucide-react';
import { Clock } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import { Button } from '@/Components/ui/button';

import { Weekly , Daily } from '@/Components/Trafficchat';
import SwitchButton from '@/Components/Switch';
const Page = () => {
  const [show, setshow] = useState(true)
  return (
    <div className='w-9/12 ml-auto'>
      <div className='w-6/12  ml-auto h-[50px] flex items-center mt-10'>
        <Search className='mr-2 ' /><Input type='text' placeholder='Search' className='w-5/12 pl-2 border-2 border-blue-500 ' />
        <div className="flex flex-row ml-5 gap-1"><Bell className="mt-0 cursor-pointer" />

          <Image src={Irfan} alt='avatar' width={50} height={50} className='ml-2 mt-0' />
          <h4 className="mt-0">Name </h4>
          <CircleChevronDown className='ml-2 mt-0 cursor-pointer border-2 border-black ' onClick={() => setshow(!show)} />
        </div>
      </div>
      <div>
        <h1>Traffic Management </h1>
        <p>Monitor and manage city traffic flow and incidents</p>
      </div>
      <div className='mt-8'>
        <Warning color={"amber"} />
      </div>
      <div className='grid grid-cols-4 gap-4 bg-white cursor-pointer mt-5'>
        <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><Car fill="white" size={50} className='ml-5 bg-blue-400 p-2' /></div>
        <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><Clock size={50} fill="white" className='ml-5 bg-yellow-400 p-2' /></div>
        <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><TriangleAlert size={50} fill="white" className='ml-5 bg-red-400 p-2' /></div>
        <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><MapPinned size={50} fill="white" className='ml-5 bg-green-400 p-2' /></div>


      </div>
      <div>
        <h1>Traffic Map</h1>
        <p>
          Real-time traffic conditions across the city

        </p>

        <div className='bg-gray-200 w-11/12 h-[300px] mt-5 cursor-pointer'>
        <div className='mt-5  w-full '>
       
        </div>

        </div>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-5'>
        <div className='w-10/12 h-[300px] border-2 border-black'>
        <div className='mt-10 h-400px curor-pointer'>
          <Weekly/>
        </div>

        </div>
        <div className='w-10/12 h-[300px] border-2 border-black'>
        <div className='mt-10 h-400px curor-pointer'>
          <Daily/>
        </div>
      

        </div>
      </div>
      <div>
        <h1>Traffic Incidents</h1>
        <p>Recent traffic incidents and their status</p>
        <div>
        <div>
      <div className='flex flex-col'>
        <div >
          <ul className='flex flex-row justify-between p-5'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>

          </ul>
        </div>
        <div >
          <ul className='flex flex-row justify-between p-5 border-2 border-black'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>
        <div >
          <ul className='flex flex-row justify-between p-5 border-2 border-black'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>
        <div >
          <ul className='flex flex-row justify-between p-5 border-2 border-black'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>
        <div >
          <ul className='flex flex-row justify-between p-5 border-2 border-black'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>


      </div>
     </div>
        </div>
      </div>
      
     <div className='flex flex-row justify-evenly'>
      <div className='flex flex-col gap-10 mt-6 w-5/12'>
        <div className='h-[50px] border-2 border-black'>
          <div className='flex flex-row gap-10 mt-4 justify-between'>
             <h2 className='ml-5'>Main St & 5th Ave</h2>
             <div className='flex flex-row gap-4 mr-3 cursor-pointer'>
              <p className='bg-orange-300 p-1'>Normal</p>
              <p className='bg-green-400 p-1'>Override</p>
             </div>
          </div>

        </div>
        <div className='h-[50px] border-2 border-black'>
          <div className='flex flex-row gap-10 mt-4 justify-between'>
             <h2 className='ml-5'>2nd St & 3rd Ave</h2>
             <div className='flex flex-row gap-4 mr-3 cursor-pointer'>
              <p className='bg-orange-300 p-1'>Normal</p>
              <p className='bg-green-400 p-1'>Override</p>
             </div>
          </div>

        </div>
        <div className='h-[50px] border-2 border-black'>
          <div className='flex flex-row gap-10 mt-4 justify-between'>
             <h2 className='ml-5'>4th St & 5th Ave</h2>
             <div className='flex flex-row gap-4 mr-3 cursor-pointer'>
              <p className='bg-orange-300 p-1'>Normal</p>
              <p className='bg-green-400 p-1'>Override</p>
             </div>
          </div>

        </div>
      </div>
      <div className='flex flex-col w-5/12 mt-10'>
      <div className='h-[120px]  border-2 border-black flex flex-col gap-3'>
        <div className='ml-5 flex flex-col gap-2'>
          <h3 className='font-bold'>Emergency Vehicle Routing</h3>
          <p>Priyanka Jonas</p>
        </div>
        <Button className='cursor-pointer w-full bg-blue-600 text-white'>Dispath Emergencry Route</Button>
      </div>
      <div className='h-[120px]  border-2 border-black flex flex-col gap-3'>
        <h3>Traffic Evacuation Plan</h3>
        <p>Coordinate traffic flow for emergency evacuation</p>
        <div className='mt-5'>
          <Button className='cursor-pointer bg-red-500 w-full text-white'>Activate Evacation  Plan </Button>
        </div>
      </div>

      </div>
     </div>
    </div>
  )
}

export default Page
