import React from 'react'
import Header from '../../component/Header'
import Body from '../../component/Body'
import Footer from '../../component/Footer'
import WaterMark from '../../component/WaterMark'

export default function Home() {
    return (
        <div className="flex flex-col gap-2 h-full w-full p-2">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}