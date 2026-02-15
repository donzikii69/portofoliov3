'use client'

import React, { useState } from 'react'


export default function Header() {
    const email = 'zikranasnawi69@gmail.com'
    const handleEmailClick = () => {

        window.open(`mailto:${email}`, '_blank');
    }

    const handleSosialMediaClick = (platform: string) => {
        let url = '';
        if (platform === 'linkedin') {
            url = 'https://www.linkedin.com/in/asrarizikran/';
        } else if (platform === 'github') {
            url = 'https://github.com/donzikii69';
        }
        window.open(url, '_blank');
    }

    return (
        <div className="text-center justify-center items-center col-span-5 bg-[#fff6e3] h-auto py-2">
            <div className='w-full justify-center items-center'>
                <hr className='mx-2 border-t-2' />
                <div className='w-full justify-between items-center grid grid-cols-3 gap-2 px-2'>
                    <p className=''>{new Date().toLocaleDateString()}</p>
                    <p className='font-bold md:text-3xl text-sm'>Asrari Zikran</p>
                    <div className='w-full justify-end items-end flex'>
                        <div className='bg-red-500 w-30 border-2'>
                            <p>HOME</p>
                        </div>
                    </div>
                </div>
                <hr className='mx-2 border-t-2' />
            </div>

            <div className='w-full flex gap-2 md:justify-between justify-center items-center px-2 md:flex-row flex-col'>
                <div className='w-full flex-1 justify-start items-start flex'>
                    <div className='md:h-45 m-2 md:text-[16px] text-[8px] text-start md:w-60 border p-2 pl-6 flex md:flex-col md:gap-2 gap-4'>
                        <li>Fullstack Web Developer</li>
                        <li>Front End Antausiazm</li>
                        <li>Mobile App Developer (React Native)</li>
                        <li>Data Science & Machine Learning</li>
                    </div>
                </div>
                <div className='w-full flex-4 justify-center items-center'>
                    <div className='md:h-45 justify-center items-center text-center w-full md:py-6'>
                        <p className='font-bold md:text-6xl text-2xl text-red-500 text-shadow-red-600 text-shadow-md'>Welcome to my personal Website</p>
                        <p className='font-bold md:text-2xl text-sm pt-4'>You Can find my works, arts, and other things here</p>
                    </div>
                </div>
                <div className='w-full md:justify-end justify-center items-end flex-1 flex md:text-start text-center'>
                    <div className='md:h-45 md:w-60 w-full border p-2 md:text-[16px] text-[8px] md:text-start text-center flex md:flex-col'>
                        <p className='md:font-semibold pr-2'>Contact Me, Click:</p>
                        <br />
                        <ul className='flex flex-row md:flex-col gap-2 md:gap-1 list-none p-0'>
                            <li className='md:font-semibold hover:cursor-pointer' onClick={handleEmailClick}>Email</li>
                            <li className='md:font-semibold hover:cursor-pointer' onClick={() => {
                                handleSosialMediaClick('linkedin');
                            }}>LinkedIn</li>
                            <li className='md:font-semibold hover:cursor-pointer' onClick={() => {
                                handleSosialMediaClick('github');
                            }}>GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full justify-center items-center md:pt-1 pt-2'>
                <hr className='mx-2 border-t-2' />

            </div>
        </div>
    )
}
