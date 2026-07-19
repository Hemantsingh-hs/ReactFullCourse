import React from 'react'
import { NavBar } from './NavBar'
import { Page1Context } from './Page1Context'


export const Section1 = (props) => {
  return (
    <div className='w-full'>
        <NavBar/>
        <Page1Context data={props.data} />
    </div>
  )
}
