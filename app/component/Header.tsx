import React from 'react'
import { Jersey_25 } from 'next/font/google';

const jersey = Jersey_25({
  variable: "--font-jersey",
  subsets: ["latin"],
  weight: "400",
})
export default function Header() {
  return (
    <div className='flex flex-row gap-2 justify-between items-center px-2' style={jersey.style}>
        <div>
          <p className='text-sm md:text-2xl'>
            Personal Web & Profile
          </p>
        </div>
        <div>
          <p className='text-sm md:text-2xl'>
            Asrari Zikran
          </p>
        </div>
        <div>
          <img src="/mainlogo.png" alt="donzikii" className='h-6 md:h-10 w-6 md:w-10 rounded-full'/>
        </div>
    </div>
  )
}
