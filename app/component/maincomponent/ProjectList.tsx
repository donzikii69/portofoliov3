import React from 'react'
import Project from '../../jsondata/project.json'
import { Mogra } from 'next/font/google'

const mogra = Mogra({
  variable: "--font-mogra",
  subsets: ["latin"],
  weight: "400",
})

type Props = {
  detail: any
}

export default function ProjectList({ detail }: Props) {
  const data = Project?.Project

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-6'>
        {data && data.map((item: any) => (
          <div key={item.id} className='items-center justify-center'>
            <div className='p-2'>
              <img src={item.display} alt={item.title} className='h-50 w-60 lg:h-100 lg:w-120 rounded-3xl' />
            </div>
            <div className='px-2'>
              <p className='font-semibold text-lg md:text-2xl px-2 md:px-4' style={mogra.style}>{item.title}</p>
              <p className='text-sm md:text-lg px-1 md:px-2'>{item.description}</p>
            </div>
          </div>
        ))
        }
      </div>

      <div className='w-full justify-center items-center text-center py-4'>
        <button className='bg-white text-black p-2 md:p-4 w-30 md:w-50 text-xl md:text-3xl font-bold rounded-4xl' style={mogra.style}>
        See More
        </button>
      </div>
    </>
  )
}
