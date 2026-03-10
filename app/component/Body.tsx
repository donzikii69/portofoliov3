import React from 'react'
import Carousel from './reusable/Carousel'
import ListSection from './reusable/ListSection'
import Sertificate from '../jsondata/sertificate.json'

export default function Body() {
  return (
    <>
      {/* Carousel */}
      <div className="md:col-span-3 md:row-span-2 bg-[#fff6e3]">
        <div className='flex flex-col gap-2 justify-center items-center p-2 h-full'>
          <Carousel />
        </div>
      </div>

      {/* About Me */}
      <div className="md:col-span-1 md:row-span-2 bg-[#fff6e3] p-2">
        <div className='text-center md:text-2xl'>
          <b>About Me:</b>
        </div>
        <br />
        <div className='text-wrap md:text-lg text-sm'>
          <p>
            Versatile Fullstack & Mobile Developer specializing in the JavaScript ecosystem (React, Node.js, React Native) and Data Science (Python, TensorFlow).
          </p>
          <br />
          <p>
            Experienced in developing end-to-end solutions, from high-performance web and mobile interfaces to backend microservices and machine learning pipelines. Adept at leveraging data to optimize app performance and enhance user engagement.
          </p>
        </div>
      </div>

      {/* List Section */}
      <div className="md:col-span-1 md:row-span-2 bg-[#fff6e3] p-2">
        <div className='text-center'>
          <p className='font-bold text-xl'>
            Sertification & Education:
          </p>
        </div>
        <ListSection detail={Sertificate} />
      </div>
    </>
  )
}