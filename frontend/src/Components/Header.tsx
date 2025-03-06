import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import taswir from '../../public/palm.png'
// import Card from './Card'
import { useContext } from 'react'
// import { Povider } from './Povider'
import { Truecontext } from './Povider'

const Header = () => {
  
   const {show , setshow} = useContext(Truecontext)
 
  return (
    
    <div className='flex flex-row'>
        <div>
        <h1 className='ml-10 mt-10 text-4xl font-bold cursor-pointer'>Palm Riveria</h1>
        </div>
        <div className='flex flex-row ml-auto mt-10' >
            <ol className='flex flex-row gap-10 ml-0'>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>Home</ul>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>About</ul>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>Services</ul>
                <ul className='transition-transform transform hover:scale-125 cursor-pointer'>How it Works</ul>
                {/* <div className='flex flex-row mt-0 cursor-pointer'> */}
                <Button size={'lg'} className='cursor-pointer'>Contact</Button>
                <Image src={taswir} alt='Mydea'  className='w-15 h-15 mr-5 cursor-pointer transform hover:scale-125`' onMouseEnter={() =>setshow(true)} onMouseLeave={() =>setshow(false)}/>
                {/* </div>
                     */}
                 
          
             
                {/* </div> */}

            </ol>
        </div>


       
    </div>
   
  )
}

export default Header