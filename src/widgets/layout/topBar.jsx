import React from 'react'
import Img from '/img/download.png'
export function TopBar() {
  return (
    <div className='flex px-4 pt-2 w-full items-center bg-slate-900 rounded-b-lg'>
      <img className='w-12 h-12 rounded-lg' src={Img} alt="" />
      <h1 className='text-white text-center w-full px-4 text-xl md:text-3xl md:px-8'>IMCS LEARNING MANANGMENT STYSTEM</h1>
    </div>
  )
}

export default TopBar