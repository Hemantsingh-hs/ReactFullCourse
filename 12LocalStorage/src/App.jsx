import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // localStorage.clear();
  localStorage.setItem('user','hemant')
  localStorage.setItem('user1','viodn')
  const user1=localStorage.getItem('user1')
  localStorage.removeItem('user');

  const details={
    name:'hemant',
    age:23,
    city:'niwai'
  }

  localStorage.setItem('details',JSON.stringify(details))
  const detail=JSON.parse(localStorage.getItem('details'))

  console.log("as",detail);
  return (
    <>
    <div>App d effdsf</div>
    <div>{user1}</div>

     </>
  )
}

export default App
