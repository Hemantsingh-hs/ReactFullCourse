import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const IncreaseCount=()=>{

    setCount(count+1);
  }
   const DecreaseCount=()=>{

    setCount(count-1);
  }

  const [users,setUsers]=useState([4,3,4,5]);

  function ArraysElement(){
     setUsers([5,6,3,5])
  }

const [num,setNum]=useState({user:"hemant",age:23})
  const btnClicked=()=>{
    const newNum={...num};
    newNum.user="vinod";
 setNum(newNum)
 console.log(newNum)
  }

  //Arrays

  const [elem,setElem]=useState([10,30,39]);

  const newBtn=()=>{

    const newElem=[...elem];

      newElem.push(880);
      setElem(newElem);
      console.log(newElem)
    
  }

  const [e,setE]=useState(50);

  const preBtn=(e)=>{

  

      setElem(prev=>(prev+1));
      console.log(e);
    
  }

  return (
    <>
      
     <h2></h2>

     <button onClick={IncreaseCount}>count is {count}</button>
     <button onClick={DecreaseCount}>Decrease</button>
      <button onClick={ArraysElement}>{users}</button>

      <br />
      <br /><br />
      <br />
      <button onClick={btnClicked}>clicked for object</button>
      <h3>{num.user}</h3>
        
     <br /><br /><br /><br />

     <button onClick={newBtn}>Array Clicked</button>  
     <h2>{elem}</h2> 

     <button onClick={preBtn}>{e}</button>
    </>
  )
}

export default App
