import React from 'react'
import Header from '../../component/Header'
import Body from '../../component/Body'
import Footer from '../../component/Footer'
import WaterMark from '../../component/WaterMark'

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-5 gap-1 w-full bg-black">
                <Header />
                <Body />
                <Footer />
            </div>
            <WaterMark />
        </>
    )
}