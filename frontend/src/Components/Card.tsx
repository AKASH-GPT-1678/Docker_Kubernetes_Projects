import React from 'react'
import Image from 'next/image'
import Tast from '../../public/yes.png'
import { Button } from './ui/button'
import { Camera } from 'lucide-react'
import "normalize.css";
import { useRouter } from 'next/navigation'
// import Waste
// import Link from 'next/link'
const Card = () => {
  const router = useRouter();
  return (
    <div className='bg-blue-800  w-[250px] h-[350px]'>
    <div className='border-4 border-black w-[250px] h-[350px]'>
      <div className='bg-blue-800'>
      <div className='flex flex-row '>
        <Image src={Tast} alt='Mydea' className='w-15 h-15 mr-5 cursor-pointer mt-2' />

        <div className='flex flex-col mt-4'>
          <h6 className='font-bold  text-white'>Palm Riveria</h6>
          <h6 className='font-bold text-white '>Everything is Smart Here</h6>
        </div>

      </div>
      <div className='flex flex-row gap-5 mt-7 mb-2'>
        <Button className='cursor-pointer' variant={'destructive'} onClick={()=>router.push('/login')}>Login </Button>
        <Button className='cursor-pointer bg-black text-white ' variant={'ghost'} onClick={()=>router.push('/Signup')}>Sign Up </Button>
      </div>
      </div>
      <div className='bg-red-300 p-3  rounded-2xl'>
      <div className='flex flex-col items-center'>
        <ul className='w-full'>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/dashboard')}><Camera className='mr-7'/> Dashboard</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/traffic')}><Camera className='mr-7'/> Traffic Management</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/Security')}><Camera className='mr-7'/> Security</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/Waste')}><Camera className='mr-7'/> Waste Management </li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/Energy')}><Camera className='mr-7'/> Energy Management</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold' onClick={()=>router.push('/More')}><Camera className='mr-7'/> Settigs</li>
      </ul>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Card

