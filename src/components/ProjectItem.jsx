import React from 'react'

const ProjectItem = ({img}) => {
  return (
    <div className='relative block items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl '>
      <img  src={img} alt="yolo project page 1" className='rounded-xl  hover:scale-110 transition duration-300 ease-in-out' />
    </div>
  )
}

export default ProjectItem
