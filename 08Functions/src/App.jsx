import { useState } from 'react'
import './App.css'


function App() {

  function btnClicked(){
    console.log("clicked button ...");
  }
  function mouseClicked(){
    console.log("clicked moused");
  }
function inputChange(){
  console.log('User typing ...');
}

const pageScroll=(e)=>{
  if(e>0){
  console.log('seedha page  scrolling');
}
else{
  console.log('ulta scrolling');
}
}

function btnClicked(){
  console.log("hello");
}
  return (
     
    <div>
      <button>Click</button>
    </div>

    // <>
      // <div>
      //  <h2>Hello useres</h2> 
      //   <button onMouseEnter={mouseClicked} onClick={btnClicked}>Change user</button>

      //   <button onClick={()=>{console.log('Button Clicked')}}>Change user</button>

      //   <input type="text" onChange={inputChange}  placeholder='Enter Name'/>

      //   <input onChange={function(e){
      //     console.log(e.target.value);
      //   }} type='text' placeholder='enter '/>
      //   </div>
    // </>
    // <div onWheel={(e)=>{pageScroll(e.deltaY)}}>
      // <div className='box '  onMouseMove={(e)=>{console.log(e.clientY)}}>
      
      {/* </div>  */}
        
      // <div className="page1"></div> 
      //  <div className="page2"></div>
      //   <div className="page3"></div>
    // </div>
   
  )
}

export default App
