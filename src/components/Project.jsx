import React from 'react'
import ProjectItem from './ProjectItem'
import yoloImg1 from '../assets/Yolo1.jpg'
import yoloImg2 from '../assets/Yolo2.jpg'
import yoloImg3 from '../assets/Yolo3.jpg'

const Project = () => {
  return (
    <div id='my-project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-20'>
    Multiple Object Detection Created by streamlit and YOLO 5
    </p>
      <div className='grid sm:grid-cols-1 gap-12'>
        <ProjectItem img={yoloImg1} />
        <ProjectItem img={yoloImg2} />
        <ProjectItem img={yoloImg3} />
      </div>
    </div>
  )
}

export default Project
