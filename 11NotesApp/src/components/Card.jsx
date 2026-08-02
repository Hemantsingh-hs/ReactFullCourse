import React from 'react'

export const Card = (props) => {

  return (
    <div className='m-5 w-71 bg-amber-200 rounded-2xl '>

      <a href="#" className="bg-neutral-primary-soft block max-w-sm p-1 pb-10 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium ">
        <div className='flex gap-8'>

   
    <h5 className="mb-1 text-2xl bg-blue-300 w-3/4 text-center rounded font-semibold tracking-tight text-heading leading-8">{props.title}</h5>
    <button className='bg-orange-500 p-1 rounded m-2 font-medium  text-xs h-6' onClick={() => {
      props.deleteNotes(props.idx);
      console.log(props.idx);
    }}>Delete</button>
        </div>
    <p className="text-body">{props.text}</p>
</a>
    </div>

  )
}
