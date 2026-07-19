import React from 'react'
import { ArrowRight } from 'lucide-react';
export const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.data.id}</h2>
    <div >
        <p className='text-lg leading-normal  text-white mb-10'>{props.data.intro}</p>
        <div className='flex justify-between'>
            <button className={`${props.data.color} text-white font-medium px-8 py-2 rounded-full`}>{props.data.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><ArrowRight  width={25} height={15}/></button>
        </div>
    </div>
</div>
  )
}
