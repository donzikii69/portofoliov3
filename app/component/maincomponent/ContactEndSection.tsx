import React from 'react'

export default function ContactEndSection() {
  const sosialMedia = [
    {
      name: 'GITHUB',
      link: 'https://github.com/donzikii',
      icon: ''
    },
    {
      name: 'INSTAGRAM',
      link: '',
      icon: ''
    },
    {
      name: 'LINKEDIN',
      link: '',
      icon: ''
    }
  ]
  return (
    <>
      <div className='flex flex-row w-full justify-between items-center gap-4 px-10 md:px-50'>
        <p>GitHub,</p>
        <p>Instagram,</p>
        <p>LinkedIn</p>
      </div>
      <div className='flex flex-col gap-2 w-full justify-center items-center'>
        <p>GET IN TOUCH</p>
        <p>I AM AVAILABLE FOR FREELANCE OR SHORT & LONG TERM CONTRACT BASED WORK OR PROJECT, JUST GET IN TOUCH:</p>
        <button>Contact Me</button>
      </div>
    </>
  )
}
