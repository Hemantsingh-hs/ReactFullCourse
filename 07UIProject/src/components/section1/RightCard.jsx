import React from 'react'

import { RightCardContent } from './RightCardContent';
export const RightCard = (props) => {
 console.log(props)
  
  return (
    <div className='w-[320px] h-[450px] shrink-0  overflow-hidden relative rounded-3xl'>
   <img className='h-full object-cover ' src={props.data.img} alt="image" />

  <RightCardContent  data={props.data}/>

    </div>
  )
}
