import React from 'react'

export default function Home() {
    return (

        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-screen bg-black">
            <div className="text-center justify-center items-center col-span-5 bg-[#fff6e3]">(1) Header, info personal contact</div>
            <div className="text-center justify-center items-center col-span-3 row-span-2 row-start-2 bg-[#fff6e3]">(2) Highlight of News Project [Carousel Style]</div>
            <div className="text-center justify-center items-center row-span-2 col-start-4 row-start-2 bg-[#fff6e3]">(3) Explaination (2) </div>
            <div className="text-center justify-center items-center row-span-2 col-start-5 row-start-2 bg-[#fff6e3]">(4) CTA Link My CV</div>
            <div className="text-center justify-center items-center col-span-2 row-span-2 row-start-4 bg-[#fff6e3]">(5)CTA Link Article That i wiriten private web</div>
            <div className="text-center justify-center items-center col-span-3 row-span-2 col-start-3 row-start-4 bg-[#fff6e3]">(6) Article I writen [Carousel Style]  </div>
        </div>

    )
}



