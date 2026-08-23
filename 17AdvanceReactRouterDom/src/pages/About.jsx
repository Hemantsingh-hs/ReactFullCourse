import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
export const About = () => {
  const nav= useNavigate()
  const btnClicked=()=>{
    console.log('button is clicked');
    nav('/');
  }
  return (
    <div>
      {/* <button  onClick={btnClicked} className='bg-red-500 py-4 px-3 rounded-2xl cursor-pointer'>Return to Home Page</button> */}
        <h3>About</h3>
    </div>
  )
}
