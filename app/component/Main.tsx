import React from 'react'
import Intro from './maincomponent/Intro'
import Tab from './maincomponent/Tab'
import ContactEndSection from './maincomponent/ContactEndSection'

export default function Main() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='py-2 w-full md:px-20 px-4'>
        <Intro />
      </div>
      <div className='md:px-18 py-4 mt-4'>
        <Tab/>
      </div>
      <div className=''>
        <ContactEndSection />
      </div>
    </div>
  )
}
