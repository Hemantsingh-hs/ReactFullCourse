import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';
import { Card } from './Card';
function App() {
  const [userData, setUserData] = useState([])
  const [index,setIndex]=useState(1);
 
  const getData=async ()=>{
    // console.log("Data fetchted please do not distrub");
   const res= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`,{username:'Hemant',password:'12345'});

   setUserData(res.data);

   console.log(res.data);

    
  
  }

  let printUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading... </h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){

      return <div key={idx}>
       <Card url={elem.url} download_url={elem.download_url} author={elem.author}/>
      </div>;
    })
  }

useEffect(function(){
  
  getData();
},[index])

  return (
    <>
     <div className='bg-black h-screen p-4 text-white overflow-auto'>
      {/* <button onClick={getData} className='bg-green-500 px-4 py-2 mb-3 active:scale-80 rounded text-white'>Get Data</button> */}

     <div className='flex flex-wrap gap-4'>{printUserData}</div>

     <div className='flex justify-center items-center p-4 gap-6'>
      <button style={{opacity:index==1?0.6:1}} className='bg-amber-400 text-black rounded-4xl py-2 font-semibold px-4 text-sm' onClick={()=>{
        if(index>1){
          setIndex(index-1)
          setUserData([])
        }
      }}>Prev</button>
      <p className='font-bold'>Page {index}</p>
      <button className='bg-amber-400 text-black rounded-2xl py-2 font-semibold px-4 text-sm' onClick={()=>{
        setIndex(index+1)
        setUserData([]);
      }
        }>Next</button>
     </div>
     </div>

    </>
  )
}

export default App
