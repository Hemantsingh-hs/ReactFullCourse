import { useState } from 'react'
import { NavBar } from './components/NavBar'
import {Footer} from './components/Footer'
import './App.css'
import { Home } from './pages/Home'
import {About} from './pages/About'
import {Product} from './pages/Product'
import {Routes,Route} from 'react-router-dom'
import E404 from './pages/E404'
import Men from './Men'
import Women from './Women'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import NavBar2 from './components/NavBar2'
function App() {
 

  return (
    <>
      <div>
        <NavBar/>
         <NavBar2/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/course' element={<Course/>} />
             <Route path='/course/:id' element={<CourseDetails/>}/>
       
            <Route path='/product' element={<Product/>}>
               <Route path='men' element={<Men/>}/>
             <Route path='women' element={<Women/>}/>
            </Route>
            

            <Route path='*' element={<E404/>} />
           

         </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
