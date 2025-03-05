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
        {
          play ?  <ReactPlayer className="bg-black-500 ml-5 mr-80 mt-10 mb-10 border-8 " url="Smart.mp4" playing={true} muted={true} width="1000px" height="400px" /> : 
          <Image src={Irfan} alt='Palm Irivera' className='w-full h-full' />
        }
     
      </div>
    </div>
  )
}

export default Middle
