import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Nav} from './compoents/Nav';
import { Contact } from './pages/Contact';
import './App.css'

function App() {
 

  return (
    <>
      <h3>Sheryians</h3>
  <Nav/>
     <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
