import React from 'react'
import Carousel from './reusable/Carousel'

export default function Body() {
  return (
    <>
      <div className="text-center justify-center items-center col-span-2 row-span-2 bg-[#fff6e3]">
        <div className='flex flex-col gap-2 justify-center items-center p-2 h-full'>
          <Carousel />
        </div>
      </div>
      <div className="justify-center items-center row-span-2  bg-[#fff6e3] p-2">
        <div className='text-center md:text-2xl'>
          <p> About Me:</p>
        </div>
        <br />
        <div className='text-wrap md:text-lg text-sm'>
          <p>
            Versatile Fullstack & Mobile Developer specializing in the JavaScript ecosystem (React, Node.js, React Native) and Data Science (Python, TensorFlow).
          </p>
          <p>
            Experienced in developing end-to-end solutions, from high-performance web and mobile interfaces to backend microservices and machine learning pipelines. Adept at leveraging data to optimize app performance and enhance user engagement.
          </p>
        </div>
      </div>
      <div className="text-center justify-center items-center row-span-2 col-span-2 bg-[#fff6e3]">
        <p>Deskripsi Penawaran Project Frelance</p>
        <p>Link Hasil Karya</p>
      </div>
    </>
  )
}
