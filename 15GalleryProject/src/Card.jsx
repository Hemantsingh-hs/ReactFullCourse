import React from 'react'

export const Card = (props) => {
  return (
    <a href={props.url} target='_blank'>
   
            <div className='h-50 w-44 overflow-hidden bg-white rounded-4xl'><img className='h-full w-full object-cover' src={props.download_url} alt="" /> 
         </div>
   
         <h3 className='font-bold'>{props.author}</h3>
 </a>
  )
}
