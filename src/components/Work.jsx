import React from 'react'
import WorkItem from './WorkItem'
const data = [
    {
        year : 2022,
        title : "AXONS Internship",
        details : 'Maintain Web application server based on .Net Core 5.0 ',
    },
    {
        year : 2023,
        title : "YOLO Object detection Web application (Python)",
        details : 'USe yolo to train Object detection AI and published on streamlit  ',
    }
]


const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
    
      {data.map((item, idx)=> (<WorkItem key={idx} year={item.year} title={item.title} details={item.details} />))}
    
    
    </div>
  )
}

export default Work
