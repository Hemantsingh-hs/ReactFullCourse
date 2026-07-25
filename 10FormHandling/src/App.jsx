import { useState } from 'react'

import './App.css'

function App() {
  const [title,setTitle] = useState('');



  const submiHandler=(e)=>{
    e.preventDefault();
    console.log('Form Submitted',title);
    setTitle('')
  }
  return (
    <>
      <div>
         <form action="" onSubmit={(e)=>{
          submiHandler(e);
         }}>
          
          <input type="text"   value={title}  onChange={(e)=>{
           setTitle(e.target.value)
          }} placeholder='Enter Name'/>

           {/* <input type="text"  value={title} placeholder='Enter Name'/> */}
          <button>Submit</button>

         </form>
      </div>
    </>
  )
}

export default App
