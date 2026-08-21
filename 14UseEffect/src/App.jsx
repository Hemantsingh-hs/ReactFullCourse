import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [num,setNum]=useState(0);

  const [num2,setNum2]=useState(100);
useEffect(function(){
  console.log('use efftect is running...');
},[num])

const [a,setA]=useState(1);
const [b,setB]=useState(1);
function aChanging(){
  console.log('A is vlaue change');

}

function bChanging(){
  console.log('B is value change');
}

useEffect(function(){
  bChanging();
  console.log("changing a or b");
},[b])

  return (
    <>
      <h2>num1 :{num}</h2>
      <h3>num2:{num2}</h3>
      <button onMouseEnter={()=>{setNum(num+1)}} 
      onMouseLeave={()=>{setNum2(num2+10)}}>click me</button>
      <br /><br /><br /><br />
          
          <h2>A is {a}</h2>
          <h2>B is {b}</h2>
      <button onClick={()=>setA(a+1)}>Change A</button>
      <button onClick={()=>setB(b-1)}>Change B</button>
    </>
  )
}

export default App
