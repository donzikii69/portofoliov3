import React from 'react'
import { Audiowide, Bitcount_Single } from 'next/font/google'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const audiowide = Audiowide({
    variable: "--font-audiowide",
    subsets: ["latin"],
    weight: "400",
})

const bitcount = Bitcount_Single({
    variable: "--font-bitcount",
    subsets: ["latin"],
    weight: "400",
})


export default function ContactEndSection() {
  const sosialMedia = [
    {
      name: 'GITHUB',
      link: 'https://github.com/donzikii69',
      icon: <FaGithub className='w-4 h-4 lg:w-6 lg:h-6 lg:m-2'/>
    },
    {
      name: 'INSTAGRAM',
      link: 'https://www.instagram.com/don_zikii',
      icon: <FaInstagram className='w-4 h-4 lg:w-6 lg:h-6 lg:m-2'/>
    },
    {
      name: 'LINKEDIN',
      link: 'https://www.linkedin.com/in/asrarizikran/',
      icon: <FaLinkedin className='w-4 h-4 lg:w-6 lg:h-6 lg:m-2'/>

    }
  ]
  return (
    <>
      <div className='flex flex-row w-full justify-between items-center gap-4 px-2 py-2 lg:py-4 lg:px-50'>
        {sosialMedia.map((item: any) => (
            <button key={item.name} onClick={() => window.open(item.link, '_blank')} className='flex flex-row rounded-3xl border justify-center items-center p-2 px-3 h-auto w-auto font-bold text-center text-xs lg:text-lg'>
              {item.icon} &nbsp; {item.name}
            </button>
        ))}
      </div>
      <div className='flex flex-col gap-2 w-full justify-center items-center text-center py-2 lg:py-4 px-2'>
        <p className='text-4xl lg:text-8xl font-bold' style={audiowide.style}>GET IN TOUCH</p>
        <p className='text-wrap lg:text-lg' style={bitcount.style}>I AM AVAILABLE FOR FREELANCE OR SHORT & LONG TERM CONTRACT BASED WORK OR PROJECT,</p>
        <p className='text-wrap lg:text-lg' style={bitcount.style}> JUST GET IN TOUCH:</p>
        <button onClick={() => window.open('mailto:zikranasnawi69@gmail.com', '_blank')} className='bg-white text-black rounded-3xl border justify-center items-center p-2 px-4 h-auto w-auto font-bold text-center text-sm lg:text-md'>Contact Me</button>
      </div>
    </>
  )
}
