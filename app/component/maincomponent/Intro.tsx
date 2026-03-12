import React from 'react'
import { Audiowide, Bitcount_Single } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { RiMailAddFill } from "react-icons/ri";


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

export default function Intro() {
    return (
        <>
            <div className='w-full justify-center items-center flex lg:pt-8 pb-2 lg:pb-6 '>
                <img src="/mainlogo.png" alt="donzikii" className='h-20 w-21 md:h-60 md:w-61 rounded-full' />
            </div>
            <div className='w-full text-start md:text-3xl xl:pl-40'>
                Hi, I'm <b>Zikran</b>, &nbsp;
                <TypeAnimation
                    sequence={[
                        "Fullstack",
                        4000,
                        "Front-End",
                        2000,
                        "Back-end",
                        2000,
                        "Data Analytics",
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className='font-bold text-amber-300 text-xl md:text-4xl'
                    style={bitcount.style}
                />
            </div>
            <div className='w-full text-center md:text-9xl text-4xl font-bold' style={audiowide.style}>
                DEVELOPER
            </div>
            <div className='w-full text-end md:text-3xl md:pr-14 xl:pr-50'>
                <TypeAnimation
                    sequence={[
                        "Website-App",
                        2000,
                        "Mobile-App",
                        2000,
                        "Desktop-app",
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className='font-bold text-green-400 text-xl md:text-4xl'
                    style={bitcount.style}
                />
            </div>

            <hr className='mx-1 border-t' />

            <div className='w-full flex flex-col lg:flex-row gap-4 pt-3 justify-between'>
                <div className='flex-1'>
                    <p className='text-sm md:text-xl'>
                        Versatile Fullstack & Mobile Developer specializing in the JavaScript ecosystem (React, Node.js, React Native) and Data Science (Python, TensorFlow).
                    </p>
                </div>
                <div className='flex-1 md:pr-6'>
                    <p className='text-sm md:text-xl'>
                        Experienced in developing end-to-end solutions, from high-performance web and mobile interfaces to backend microservices and machine learning pipelines. Adept at leveraging data to optimize app performance and enhance user engagement.
                    </p>
                </div>
                <div className='flex-1 text-sm md:text-xl'>
                    Don't hesitate to contact me, please ask anything you need: &nbsp;
                    <a href={'mailto:zikranasnawi69@gmail.com'} className='font-bold underline'>Mail</a>
                </div>

            </div>
        </>
    )
}
