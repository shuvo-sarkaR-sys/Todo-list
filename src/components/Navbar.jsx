import React from 'react'

function Navbar(props) {
  return (
    <div className='flex justify-between px-16 bg-slate-900 h-10 text-white'>
        <p className='text-2xl'>itask</p>
      <ul className='flex gap-5 text-xl'>
        <li>Home</li>
        <li>Info</li>
        <li>Manu</li>
      </ul>
    </div>
  )
}

export default Navbar
