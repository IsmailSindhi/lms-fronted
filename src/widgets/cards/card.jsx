import React from 'react'

export function Card({ icon, color,text,}) {
  return (
    <div className={`border-white border-2 w-40 bg-red-700 text-center text-xl font-bold text-white p-2 rounded-xl m-2 flex items-center justify-center gap-4 hover:drop-shadow-xl hover:bg-white hover:text-black`}>
        <div>{icon}</div>
        <div>{text}</div>
    </div>
  )
}

export default Card