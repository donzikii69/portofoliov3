import React, {useState} from 'react'
import ProjectList from './ProjectList'
import Experiance from './Experiance'
import Education from './Education'

export default function Tab() {
    const [isProjectContent, setIsProjectContent] = useState(true)
    const [isExpirianceContent, setIsExpirianceContent] = useState(false)
    const [isSertificateContent, setIsSertificateContent] = useState(false)

    const baseClass = 'rounded-3xl p-2 w-30 font-bold text-center text-lg transition-colors'
    const activeClass = 'bg-white text-black'
    const inactiveClass = 'bg-none text-white'

    return (
        <>
            <div className='w-90 flex flex-row gap-2 rounded-3xl border mb-6 ml-4'>
                <button
                    onClick={() => {
                        setIsProjectContent(true)
                        setIsExpirianceContent(false)
                        setIsSertificateContent(false)
                    }}
                    className={`${baseClass} ${isProjectContent ? activeClass : inactiveClass}`}
                >
                    Project
                </button>
                <button
                    onClick={() => {
                        setIsProjectContent(false)
                        setIsExpirianceContent(true)
                        setIsSertificateContent(false)
                    }}
                    className={`${baseClass} ${isExpirianceContent ? activeClass : inactiveClass}`}
                >
                    Experience
                </button>
                <button
                    onClick={() => {
                        setIsProjectContent(false)
                        setIsExpirianceContent(false)
                        setIsSertificateContent(true)
                    }}
                    className={`${baseClass} ${isSertificateContent ? activeClass : inactiveClass}`}
                >
                    Sertificate
                </button>
            </div>
            <div className='w-full py-4'>
                {isProjectContent && <ProjectList detail={null} />}
                {isExpirianceContent && <Experiance/>}
                {isSertificateContent && <Education/>}
            </div>
            <hr className='mx-2 border-t' />
        </>
    )
}