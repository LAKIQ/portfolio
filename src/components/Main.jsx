import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover ' src="../assets/me1.jpg'" alt="me1" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>MY NAME IS PAT</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
                <TypeAnimation
                    sequence={[
                        'Web Developer', // Types 'One'
                        2000, // Waits 1s
                        'Developer', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em',paddingLeft:'5px' }}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20} />
                    <FaGithub    className='cursor-pointer' size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
