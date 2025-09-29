import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import taswir from '../../public/palm.png'
// import Card from './Card'
import { useContext } from 'react'
import { ShowChat } from './Povider'
import { Truecontext } from './Povider'
import {Servicedrop} from './Servicedrop'

type Headprop = {
  chat : Boolean
}

const Header : React.FC<Headprop> = ({chat}) => {
  
   const {show , setshow} = useContext(Truecontext)
   const {showchat , setShow} = useContext(ShowChat)
   const [drop , setdrop] = React.useState(false);
   

 
  return (
    
    <div className='flex flex-row'>
        <div>
        <h1 className='ml-10 mt-10 text-4xl font-bold cursor-pointer'>Palm Riveria</h1>
        </div>
        <div className='flex flex-row ml-auto mt-10' >
            <ol className='flex flex-row gap-10 ml-0'>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>Home</ul>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>About</ul>
                <div className='flex flex-col'>
                  <ul className='transition-transform transform hover:scale-125 cursor-pointer' onClick={() =>setdrop(!drop)}>Services</ul>
                  {drop && <Servicedrop/>}
                </div>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>How it Works</ul>
                <ul className='cursor-pointer' onClick={() =>setShow(!showchat)}>Chat</ul>
                {/* <div className='flex flex-row mt-0 cursor-pointer'> */}
                <Button size={'lg'} className='cursor-pointer'>Contact</Button>
                <Image src={taswir} alt='Mydea'  className='w-15 h-15 mr-5 cursor-pointer transform hover:scale-125`' onMouseEnter={() =>setshow(true)} onMouseLeave={() =>setshow(false)}/>
          
            </ol>
        </div>


       
    </div>
   
  )
}

export default Header