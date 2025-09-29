import React from 'react'
import Moremid from '../../public/riveria.png'
import Image from 'next/image'
const BotMiddle = () => {
  return (
    <div className='border-8 border-dashed flex flex-row'>
        <div className='flex flex-row justify-center w-full cursor-pointer '>
            <div className='mt-45' >
                <p>


Innovative urban living</p>
                <h1>Experience the Future of the Cities</h1>
                <p>
      Palm Riveria revolutionizes urban living <br />
      with its cutting-edge Smart City system. <br />
      Located in Mumbai, we blend <br />
      sustainable urban infrastructure with <br />
      AI-powered traffic management, <br />
      smart energy solutions, and <br />
      IoT-integrated security to create <br />
      a seamless living experience. <br />
      <br />
    
    </p>
    </div>
    <div  className='flex flex-col mt-0'>
        <Image src={Moremid}  alt='More image' className='mt-40 h-[250px] w-[400px] ml-10'/>
        </div>

        
         

</div>

        
        
        
    </div>
  )
}

export default BotMiddle