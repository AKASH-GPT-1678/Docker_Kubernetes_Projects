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
import SwitchButton from '@/Components/Switch';
// import { Slider } from '@/Components/ui/slider';
import { Button } from '@/Components/ui/button';
import { Slider } from '@mui/material';
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
            <ConsumptionProductionChart />

          </div>
          <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
            <EnergyProfileChart />

          </div>

          <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
            <EnergySourcesChart />
          </div>
          <div className='w-full h-[300px] border-2 border-black cursor-pointer'>
            <EnergyConsumptionChart />
          </div>

        </div>
        <div className='flex flex-row justify-between'>

          <div className='flex flex-col border-2 border-black w-1/2'>
            <h2 className='font-bold text-xl mt-3'>Energy Management Controls</h2>
            <div className='flex flex-col gap-5'>
              <div>
                <h3>Smart Grid  Control</h3>
                <div>
                  <div className='bg-gray-200 w-1/3 h-[50px] mt-3 '>
                    <div className='flex flex-row justify-between items-center h-full'>
                      <h2 className='font-bold text-xxl cursor-pointer'>Peak Load Balancing</h2>

                      <SwitchButton />


                    </div>
                  </div>
                  <div className='bg-gray-200 w-1/3 h-[50px] mt-3 '>
                    <div className='flex flex-row justify-between items-center h-full'>
                      <h2 className='font-bold text-xxl cursor-pointer'>Renewable Energy Distribution</h2>

                      <SwitchButton />


                    </div>
                  </div>
                  <div className='bg-gray-200 w-1/3 h-[50px] mt-3 '>
                    <div className='flex flex-row justify-between items-center h-full'>
                      <h2 className='font-bold text-xxl cursor-pointer'>Energy Storage System</h2>

                      <SwitchButton />


                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
          <div className='flex flex-col border-2 border-black w-1/2'>
            <div className=''>
              <h2 className='font-bold text-xl mt-3'>Energy Storage Management</h2>
              <div className='w-9/12'>
                <h2>Battery Storage</h2>
                <Slider defaultValue={50}  className='cursor-pointer mt-5 ml-5'/>
                <div>
                  <ul className='flex flex-row justify-between mt-5'>
                    <li>0%</li>
                    <li>50%</li>
                    <li>100%</li>
                  </ul>
                </div>
              </div>
              <div>
                 <h2>Storage Mode</h2>
                 <div className='flex flex-row w-8/12 justify-between'>
                  <Button className='bg-blue-500 px-8 cursor-pointer'>Auto</Button>
                  <Button className='bg-gray-500 px-8 cursor-pointer'>Charge</Button>
                  <Button className='bg-gray-500 px-8 cursor-pointer'>Discharge</Button>
                 </div>
              </div>

            </div>
          </div>

        </div>
        {/* <div>
        <h1>hello</h1>
       </div> */}

      </div>




    </div>
  )
}

export default Energy

