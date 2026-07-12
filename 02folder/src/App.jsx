import { useState } from 'react'
import Card from './components/Card'
import './App.css' 
import NavBar  from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   
        <NavBar/>
        <NavBar/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
