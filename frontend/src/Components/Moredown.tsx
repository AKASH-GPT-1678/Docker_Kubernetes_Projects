import React from 'react'
import Image from 'next/image'
import Sofa from '../../public/three/image.png'
import Scene from '../../public/three/scene.png'
import None from '../../public/three/sofa.png'
import { ArrowRight } from 'lucide-react'

const Moredown = () => {
    return (
        <div className='h-[350px]'>
            <div className='flex flex-row justify-center ml-20 mr-20'>
            <div className='flex flex-row gap-5 shadow-2xl'>
                <div className='border-2 border-solid w-[200px] h-[280px]'>
                    <div>
                      <Image src={None} alt='My images  '/>
                    </div>
                    <div>
                        <h3 className='hover:text-green-400 hover:cursor-pointer flex flex-row gap-2'>SustainableLiving <ArrowRight/></h3>
                        <p className='text-sm'>Embracing eco-friendly solutions to reduce carbon footprints.
                            Utilizing renewable energy sources for a greener tomorrow.
                            </p>
                    </div>
                </div>
                <div>
                    <div className='border-2 border-solid w-[200px] h-[280px] '>
                        <div>
                          
                          
                          <Image src={Scene} alt='Nothing' />
            

                        </div>
                        <div>
                            <h3 className='hover:text-green-400 hover:cursor-pointer flex flex-row gap-2'>Smart Infrastructure <ArrowRight /></h3>
                            <p className='text-sm'>Integrating IoT and AI to optimize urban development.
                                Enhancing public transportation with real-time monitoring.
                                </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-2 border-solid gap-5 w-[200px] h-[280px] '>
                        <div>
                           <Image src  ={Sofa} alt='My images '/>
                        </div>
                        <div>
                            <h3 className='hover:text-green-400 hover:cursor-pointer flex flex-row gap-2'>Urban Convienience <ArrowRight/></h3>
                            <p className='text-sm'>Seamless access to public services through smart apps.
                                Improved traffic management with AI-powered insights.
                                .</p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Moredown
