import React from 'react'
import { RightCard } from './RightCard'

export const RightContent = (props) => {
  return (
    <div id='right' className='h-full  w-2/3 p-4 rounded-3xl flex flex-nowrap gap-10  overflow-x-auto'> 

       {props.data.map(function(item){
 
        return <RightCard key={item.id} data={item} />

      })}
    </div>
  )
}
