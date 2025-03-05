import React from 'react'
import Image from 'next/image'
import Tast from '../../public/yes.png'
import { Button } from './ui/button'
import { Camera } from 'lucide-react'
import "normalize.css";
import { useRouter } from 'next/navigation'
const Card = () => {
  const router = useRouter()
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
        <Button className='cursor-pointer' variant={'destructive'}>Login </Button>
        <Button className='cursor-pointer bg-black text-white ' variant={'ghost'} onClick={()=>router.push('/Signup')}>Sign Up </Button>
      </div>
      </div>
      <div className='bg-red-300 p-3  rounded-2xl'>
      <div className='flex flex-col items-center'>
        <ul className='w-full'>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold'><Camera className='mr-7'/> Item 1</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold'><Camera className='mr-7'/> Item 2</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold'><Camera className='mr-7'/> Item 3</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold'><Camera className='mr-7'/> Item 4</li>
        <li className='flex flex-row items-center transition-transform transform hover:bg-blue-100 p-2 active:bg-white cursor-pointer font-bold'><Camera className='mr-7'/> Item 5</li>
      </ul>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Card
