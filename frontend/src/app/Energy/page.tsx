"use client";
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/Components/ui/input'
import { CircleChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import Irfan from '../../../public/irfan.png'
import Warning from '@/Components/Warning'
import { ConsumptionProductionChart, EnergyProfileChart, EnergySourcesChart, EnergyConsumptionChart } from '@/Components/Enerygy';

const Energy = () => {
  const [show, setshow] = useState(true)
  return (
    <div>
      <div className='w-9/12 ml-auto'>
        <div className='w-6/12  ml-auto h-[50px] flex items-center mt-10'>
          <Search className='mr-2 ' />
          <Input type='text' placeholder='Search' className='w-5/12 pl-2 border-2 border-blue-500 ' />
          <div className="flex flex-row ml-5 gap-1">
            <Bell className="mt-0 cursor-pointer" />

            <Image src={Irfan} alt='avatar' width={50} height={50} className='ml-2 mt-0' />
            <h4 className="mt-0">Name </h4>
            <CircleChevronDown className='ml-2 mt-0 cursor-pointer border-2 border-black ' onClick={() => setshow(!show)} />
          </div>
        </div>
        <div>
          <h1>Energy Management </h1>
          <p>Monitor and manage city traffic flow and incidents</p>
        </div>
        <div className='mt-8'>
          <Warning color={"amber"} />
        </div>
        <div className='grid grid-cols-4 gap-4 bg-white cursor-pointer mt-5'>
          {/* <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><Car fill="white" size={50} className='ml-5 bg-blue-400 p-2' /></div>
          <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><Clock size={50} fill="white" className='ml-5 bg-yellow-400 p-2' /></div>
          <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><TriangleAlert size={50} fill="white" className='ml-5 bg-red-400 p-2' /></div>
          <div className='w-[200px] h-[150px] border-2 border-black flex items-center'><MapPinned size={50} fill="white" className='ml-5 bg-green-400 p-2' /></div> */}


        </div>
        <div>
          <h1>Energy Grid Map</h1>
          <p>
          Real-time view of energy production and consumption



          </p>

          <div className='bg-gray-200 w-11/12 h-[300px] mt-5 cursor-pointer'>



          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-5'>
          <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
          <ConsumptionProductionChart/>

          </div>
          <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
          <EnergyProfileChart/>

          </div>
          
            <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
            <EnergySourcesChart/>
            </div>
            <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
            <EnergyConsumptionChart/>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Energy

