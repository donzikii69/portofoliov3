import React from 'react'

type Props = {
  detail: any,
}

export default function ListSection({ detail }: Props) {
  console.log("detail:", detail)

  const list = detail?.Sertificate ?? []

  return (
    <div className='grid grid-flow-row-dense gap-2 pt-2'>
      {list.map((item: any) => (
        <div key={item.id} className='bg-[#f2e8d8] rounded-xl flex flex-row items-center gap-1'>
          <div className='p-2'>
            <img src={item.display} alt={item.title} className='h-13 w-16 rounded-md' />
          </div>
          <div className='text-start'>
            <p className='font-semibold'>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
        // <div key={item.id} className='bg-red-500 m-1 rounded-xl grid grid-cols-3'>
        //   <div className='p-2 col-span-1'>
        //     <img src={item.display} alt={item.title} className='h-13 w-16' />
        //   </div>
        //   <div className='p-1 text-start col-span-2'>
        //     <p>{item.title}</p>
        //     <p>3</p>
        //   </div>
        // </div>
      ))}
    </div>
  )
}