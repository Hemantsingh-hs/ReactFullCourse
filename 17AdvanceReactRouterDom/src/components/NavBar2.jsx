import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavBar2 = () => {
      const nav= useNavigate()

  return (
    <div className='py-3 px-6 bg-cyan-600'>
 <button onClick={()=>{nav('/')}} className='font-medium bg-emerald-300 py-5 px-3 rounded-e-2xl m-2 cursor-pointer active:scale-95'>
Return Home
 </button>
 <button onClick={()=>{nav(-1)}} className='font-medium bg-emerald-300 py-5 px-3 rounded-e-2xl m-2 cursor-pointer active:scale-95'>
Back
 </button>


  <button onClick={()=>{nav(+1)}} className='font-medium bg-blue-500 py-5 px-3 rounded-e-2xl m-2 cursor-pointer active:scale-95'>
Next
 </button>

    </div>
  )
}

export default NavBar2