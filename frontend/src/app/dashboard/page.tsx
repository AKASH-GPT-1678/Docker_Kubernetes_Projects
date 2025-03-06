"use client";
import Irfan from "../../../public/irfan.png"
import React from 'react'
import { Bell } from 'lucide-react';
import { Input } from '@/Components/ui/input';
import { CircleChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Dropdown from "@/Components/Dropdown";
import Warning from "@/Components/Warning";
import { Truck } from 'lucide-react';
import { Zap } from 'lucide-react';
import Barchart from "@/Components/Barchart";
import SalesLineChart from "@/Components/Linechart";


// import { ContextType } from "react";
const About = () => {
  const [show , setshow] = React.useState(false)



  return (
  
    <div className='w-9/12 h-screen ml-auto border-2 border-black '>
        <div className=''>
         <div className='w-6/12  ml-auto h-[50px] flex flex-row mt-10'>
         <Search className='absolute ml-4 mt-2 ' /><Input type='text' placeholder='Search'  className='w-5/12 pl-12 border-2 border-blue-500 '/>
         <div className="flex flex-row ml-5 gap-5 "><Bell className="mt-3 cursor-pointer"/>
        
          <Image src={Irfan} alt='avatar' width={50} height={50} className='ml-3 mt-1' />
          <h4 className="mt-5">Name </h4>
          <CircleChevronDown className='ml-10 cursor-pointer border-2 border-black mt-5 ' onClick={()=> setshow(!show)}/>
       
        

    
         </div>
         

         </div>
        </div>

        <div >
        {show && <div className="mr-12  absolute right-0">
            <Dropdown/>
          </div>}
     <h1>Dashboard </h1>
     <p>Overview of teh Smart City Management System </p>
          </div>
          <div className="mt-5 w-10/12 ml-10 ">
            <Warning color={"amber"}/>
          </div>

          <div>
            <div className="grid grid-cols-4 gap-4  m-20 cursor-pointer ">
              <div className="bg-white p-4 h-[150px] w-[250px] gap-5 ">
                <div className="flex flex-row ">
                <div className="bg-blue-400 w-fit p-3">
                  <Truck fill={'white'}  size={50} />
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <h2>Traffic Flow</h2>
                  <p>{"Hello "}</p>
                </div>
                </div>
               
                <div className="mt-5">
                  <h3>↑ 12% from last month</h3>
                </div>
              </div>
              <div className="bg-white p-4 h-[150px] w-[250px] gap-5 ">
                <div className="flex flex-row">
                <div className="bg-green-400 w-fit p-3">
                  <Zap fill={'white'}  size={50} />
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <h2>Energy Consumption</h2>
                  <p>{"Hello "}</p>
                </div>
                </div>
               
                <div className="mt-5">
                  <h3>↑ 12% from last month</h3>
                </div>
              </div>
              <div className="bg-white p-4 h-[150px] w-[250px] gap-5 ">
                <div className="flex flex-row">
                <div className="bg-yellow-400 w-fit p-3">
                  <Truck fill={'white'}  size={50} />
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <h2>Waste Management</h2>
                  <p>{"Hello "}</p>
                </div>
                </div>
               
                <div className="mt-5">
                  <h3>↑ 12% from last month</h3>
                </div>
              </div>
              <div className="bg-white p-4 h-[150px] w-[250px] gap-5 border-2 ">
                <div className="flex flex-row">
                <div className="bg-red-400 w-fit p-3">
                  <Zap fill={'white'}  size={50} />
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <h2>Security Incidents</h2>
                  <p>{"Hello "}</p>
                </div>
                </div>
               
                <div className="mt-5">
                  <h3>↑ 12% from last month</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <Barchart/>
            <SalesLineChart/>
          </div>
          <div className="border-2 border-black cursor-pointer">
            <h1>City Overview </h1>
            <p>Here is tehe realtime overview of city data </p>
            <div className="w-full  h-[400px]" >

              <div className="w-10/12  h-[380px] bg-gray-100 ml-20 mt-5" >

              </div>

            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1>Recent Alerts</h1>
              <h1 className="cursor-pointer">See all alerts </h1>
            </div>
            <div className="w-11/12 ml-10 grid grid-cols-2 gap-5">
            <Warning color={"amber"} />
            <Warning color={"red"} />
            <Warning color={"blue"} />
            <Warning color={"green"} />

            </div>
          </div>
          


    </div>
    
  )
}

export default About

