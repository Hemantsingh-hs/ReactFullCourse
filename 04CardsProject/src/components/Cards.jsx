import React from 'react'


import { IoLogoGithub ,IoLogoLinkedin } from "react-icons/io5";
import {GiOpenFolder} from "react-icons/gi"
import {IoIosMail} from "react-icons/io"
export const Cards = (props) => {
     const imgUrl1="https://imgs.search.brave.com/HEoAyeLh9MQmFl5n8w6qyddvKHHOMnXUMHSKprIuwAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/MjIwLzczMy9zbWFs/bC9jaGVlcmZ1bC1p/bmRpYW4tYXNpYW4t/eW91bmctZ3JvdXAt/b2YtY29sbGVnZS1z/dHVkZW50cy1vci1m/cmllbmRzLXRvZ2V0/aGVyLXBob3RvLmpw/Zw";
  return (
      <div  className='card' >
            <img src={imgUrl1} alt="imgtop" />
          <div className="top">
            <img src={props.imgPic} alt="img" />
            </div>  
            <h3 className='text-center text-1xl font-bold'>{props.name}</h3> 
            <p className='text-center font-thin text-sm'><i>MCA Student</i></p>   
            <p className='text-center text-purple-900 font-bold'>KIET GROUP OF INSITITUE</p>
            <div className='icons flex gap-7 justify-center mt-4 text-2xl'> 
               <a href={props.git}> <IoLogoGithub/></a>
               <a href={props.portfolio}> <GiOpenFolder /></a>
               <a href={props.linkedin}><IoLogoLinkedin /></a>
               <a href={props.email}> <IoIosMail /></a>  
              
                
                 
                
            </div>
            <div className="bottom border-t mt-4 border-t-indigo-950 flex  justify-center gap-5  font-thin" >
              
              <h3 >{props.hour}</h3>
              <p>{props.location}</p>
             
            </div>
            <div className='ml-55 mt-3 '>

            <button className='btn' >Share</button>
            </div>
        </div>
  )
}
