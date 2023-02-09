import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import MainItem from './MainItem'
import me1 from '../assets/me1.jpg'
const Main = () => {
  return (
    <div id='main'>
         <MainItem img={me1} />
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
                            <a href="https://www.facebook.com/ppat.thitikulvanich/" >
                            <FaFacebookF className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://github.com/LAKIQ'>
                            <FaGithub className='cursor-pointer' size={20} />
                    </a>
                    <a href='https://www.linkedin.com/in/%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%A8-%E0%B8%90%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B8%A7%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%A2%E0%B9%8C-a3167422a/'>
                    <FaLinkedinIn    className='cursor-pointer' size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
