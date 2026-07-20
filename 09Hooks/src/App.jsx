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


  return (
    <>
      
     <h2></h2>

     <button onClick={IncreaseCount}>count is {count}</button>
     <button onClick={DecreaseCount}>Decrease</button>
      <button onClick={ArraysElement}>{users}</button>
        
    </>
  )
}

export default App
