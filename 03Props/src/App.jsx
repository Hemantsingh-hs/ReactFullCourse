import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const imgurl1="https://images.unsplash.com/photo-1772232818798-a4b5ff9c13ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D";
  const imgurl2="https://images.unsplash.com/photo-1783497825305-38546053047c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className='parent'>

        <Card  user="Hemant Singh" age={23} imgurl={imgurl1}/>
        <Card  user="Admin Singh" age={32} imgurl={imgurl2}/>
        {/* <Card/> */}

      </div>
    </>
  )
}

export default App
