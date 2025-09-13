import React from 'react'

//text

export default function Title({title}) {
  return (
    <div className='flex justify-center  '>
      <h1 className='text-[#BBA085] text-md sm:text-2xl '>{title}</h1>
    </div>
  )
}
