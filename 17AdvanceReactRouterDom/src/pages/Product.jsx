import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export const Product = () => {
  return (
    <div>
        <h3>Product</h3>
        <div className='flex justify-between gap-8 m-10 font-bold'>

        <Link to='/product/men '>Mens</Link>
        <Link to='/product/women'>Womens</Link>
        </div>
        <Outlet/>
    </div>
  )
}
