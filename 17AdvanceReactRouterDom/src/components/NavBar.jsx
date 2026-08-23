import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className='flex py-4 bg-blue-500 justify-between'>
      <h2 className='text-xl font-bold'>FinTracter</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-bold' to='/'>Home</Link>
        <Link  className='text-xl font-bold' to="/about">About</Link>
        <Link  className='text-xl font-bold' to="/product">Product</Link>
      <Link className='text-xl font-bold' to='/course'> Course</Link>
   
      </div>
    </div>
  )
}
