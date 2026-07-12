import { useState } from 'react'
import './App.css'
import { Cards } from './components/Cards';
import HemantPic from './assets/HemantPic.png'
function App() {
  const [count, setCount] = useState(0)

  const profileCards = [
  {
    id: 1,
    name: "Hemant Singh",
    role: "MCA Student",
    college: "KIET Group of Institutions",
    profileImage: HemantPic,
    hourlyRate: "$1000/hr",
    location: "Delhi NCR, India",
    github: "https://github.com/Hemantsingh-hs",
    linkedin: "https://linkedin.com/in/hemantsingh-hs",
    portfolio: "https://hemantsingh-hs.github.io/portfolio/",
    email: "hemant@gmail.com",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    college: "Delhi University",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    hourlyRate: "$45/hr",
    location: "Noida, India",
    github: "https://github.com/rahul",
    linkedin: "https://linkedin.com/in/rahul",
    portfolio: "https://rahulsharma.dev",
    email: "rahul@gmail.com",
  },
  {
    id: 3,
    name: "Priya Verma",
    role: "UI/UX Designer",
    college: "Amity University",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    hourlyRate: "$50/hr",
    location: "Gurugram, India",
    github: "https://github.com/priya",
    linkedin: "https://linkedin.com/in/priya",
    portfolio: "https://priyaverma.dev",
    email: "priya@gmail.com",
  },
  {
    id: 4,
    name: "Aman Gupta",
    role: "Backend Developer",
    college: "AKTU",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    hourlyRate: "$60/hr",
    location: "Lucknow, India",
    github: "https://github.com/aman",
    linkedin: "https://linkedin.com/in/aman",
    portfolio: "https://amangupta.dev",
    email: "aman@gmail.com",
  },
  {
    id: 5,
    name: "Neha Singh",
    role: "Data Analyst",
    college: "BHU",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    hourlyRate: "$55/hr",
    location: "Varanasi, India",
    github: "https://github.com/neha",
    linkedin: "https://linkedin.com/in/neha",
    portfolio: "https://nehasingh.dev",
    email: "neha@gmail.com",
  },
  {
    id: 6,
    name: "Rohit Kumar",
    role: "Full Stack Developer",
    college: "NIT Patna",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    hourlyRate: "$70/hr",
    location: "Patna, India",
    github: "https://github.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
    portfolio: "https://rohitkumar.dev",
    email: "rohit@gmail.com",
  },
  {
    id: 7,
    name: "Anjali Mehta",
    role: "Software Engineer",
    college: "IIT Delhi",
    profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
    hourlyRate: "$90/hr",
    location: "New Delhi, India",
    github: "https://github.com/anjali",
    linkedin: "https://linkedin.com/in/anjali",
    portfolio: "https://anjalimehta.dev",
    email: "anjali@gmail.com",
  },
  {
    id: 8,
    name: "Vikas Yadav",
    role: "React Developer",
    college: "JIIT Noida",
    profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
    hourlyRate: "$65/hr",
    location: "Noida, India",
    github: "https://github.com/vikas",
    linkedin: "https://linkedin.com/in/vikas",
    portfolio: "https://vikasyadav.dev",
    email: "vikas@gmail.com",
  },
  {
    id: 9,
    name: "Sneha Patel",
    role: "Cloud Engineer",
    college: "BITS Pilani",
    profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
    hourlyRate: "$85/hr",
    location: "Jaipur, India",
    github: "https://github.com/sneha",
    linkedin: "https://linkedin.com/in/sneha",
    portfolio: "https://snehapatel.dev",
    email: "sneha@gmail.com",
  },
  {
    id: 10,
    name: "Arjun Malhotra",
    role: "DevOps Engineer",
    college: "Chandigarh University",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    hourlyRate: "$80/hr",
    location: "Chandigarh, India",
    github: "https://github.com/arjun",
    linkedin: "https://linkedin.com/in/arjun",
    portfolio: "https://arjunmalhotra.dev",
    email: "arjun@gmail.com",
  },
];


  return (
    
      <div className='parent'> 
          {profileCards.map(function(e){

          return  (<Cards name={e.name} key={e.id} imgPic={e.profileImage} git={e.github} linkedin={e.linkedin} email={e.email} portfolio={e.portfolio} hour={e.hourlyRate} location={e.location}/>)
           
          })}
      </div>
    
  )
}

export default App
