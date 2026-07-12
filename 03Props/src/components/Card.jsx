import React from 'react'

export const Card = (props) => {

  console.log(props)
  return (
   <div className='card'>

          <h1>{props.user}</h1>
          <img src={props.imgurl} alt="image" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora beatae ad cum eaque ex asperiores obcaecati totam ea nostrum voluptates, sed odio, quam accusamus qui autem dolor vitae et?</p>
          <button>View Profile</button>
        </div>
  )
}

