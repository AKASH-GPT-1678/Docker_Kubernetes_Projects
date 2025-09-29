import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import Irfan from '../../public/palmba.jpg'
import { useEffect } from 'react'
const Middle = () => {
  const [play, setplay] = useState(false);
  const setFalse = () => {
    setplay(false)
  }

  useEffect(() => {

    setplay(true)




    const timer = setTimeout(() => {
      setplay(false)
    }, 15000)


    window.addEventListener('click', setFalse)

    return () => clearTimeout(timer);

  }


    , [])

  return (
    <div>
      <div>

          <Image src={Irfan} alt='Palm Irivera' className='w-full h-full' />
        
     
      </div>
    </div>
  )
}

export default Middle
