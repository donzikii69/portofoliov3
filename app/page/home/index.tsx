'use client'

import React from 'react'
import Header from '../../component/Header'
import Main from '../../component/Main'
import Footer from '../../component/Footer'
import WaterMark from '../../component/WaterMark'

export default function Home() {
    return (
        <div className="flex flex-col gap-2 h-full w-full p-2 bg-black text-white">
            <Header />
            <hr className='mx-1 border-t md:border-t-2' />
            <Main />
            <Footer />
        </div>
    )
}