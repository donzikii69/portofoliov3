import React, {useState} from 'react'
import ProjectList from './ProjectList'
import Experiance from './Experiance'
import Education from './Education'

export default function Tab() {
    const [isProjectContent, setIsProjectContent] = useState(false)
    const [isExpirianceContent, setIsExpirianceContent] = useState(false)
    const [isSertificateContent, setIsSertificateContent] = useState(false)

    return (
        <>
            <div className='w-90 flex flex-row gap-2 rounded-3xl border mb-6 ml-4'>
                <button onClick={()=> {
                    setIsProjectContent(true)
                    setIsExpirianceContent(false)
                    setIsSertificateContent(false)
                    }} className='focus:bg-white focus:text-black bg-none rounded-3xl p-2 w-30 font-bold text-center text-lg'>Project</button>
                <button onClick={()=> {
                    setIsProjectContent(false)
                    setIsExpirianceContent(true)
                    setIsSertificateContent(false)
                    }} className='focus:bg-white focus:text-black bg-none rounded-3xl p-2 w-30 font-bold text-center text-lg'>Experience</button>
                <button onClick={()=> {
                    setIsProjectContent(false)
                    setIsExpirianceContent(false)
                    setIsSertificateContent(true)
                    }} className='focus:bg-white focus:text-black bg-none rounded-3xl p-2 w-30 font-bold text-center text-lg'>Sertificate</button>
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
