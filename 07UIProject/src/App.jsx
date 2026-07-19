import { useState } from 'react'

import './App.css'
import { Section1 } from './components/section1/Section1'
import { Section2 } from './components/section2/Section2'

function App() {
 const users = [
  {
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zpc3Npb25hbCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    name: 'Sarah Johnson',
    designation: 'Marketing Manager',
    company: 'Bright Solutions',
    intro: 'Sarah has helped our company improve customer engagement through innovative digital marketing strategies.',
    tag: 'Satisfied',
    color:'bg-green-600'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zpc3Npb25hbCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    name: 'Michael Brown',
    designation: 'Startup Founder',
    company: 'TechNova',
    intro: 'Finding reliable financial services was challenging until we discovered this platform and grew our business.',
    tag: 'Underserved',
    color:'bg-red-600'
  },
  {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1682437317248-b8b00e36bb94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    name: 'Emily Davis',
    designation: 'Freelance Designer',
    company: 'Self-Employed',
    intro: 'As a freelancer, this platform made it easier to manage my finances and access affordable financial services.',
    tag: 'Underbanked',
    color:'bg-blue-600'
  },
  {
  id: 4,
  img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60',
  name: 'David Wilson',
  designation: 'Financial Consultant',
  company: 'WealthBridge',
  intro: 'Our clients now enjoy faster approvals and better financial planning, helping them achieve their goals with confidence.',
  tag: 'Empowered',
  color:'bg-orange-600'
},
{
  id: 5,
  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60',
  name: 'Olivia Martinez',
  designation: 'Small Business Owner',
  company: 'Bloom Cafe',
  intro: 'This platform simplified business banking and gave us the tools to expand our café without unnecessary financial hurdles.',
  tag: 'Thriving',
  color:'bg-black'
}
];

  return (
    <>
       <Section1 key={users.id} data={users}/>
       <Section2/>
    </>
  )
}

export default App
