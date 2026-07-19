import React from 'react'
import {LeftContent} from './LeftContent'
import {RightContent} from './RightContent'
export const Page1Context = (props) => {
  return (
    <div className='py-3 flex item-center gap-10  h-full px-18 '>
      
        <LeftContent/>
        <RightContent data={props.data}/>

    </div>
  )
}
