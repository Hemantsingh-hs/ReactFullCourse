import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

//  async function getData(){
//    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log("data agya")
//     const data=await response.json();
//     console.log(response);
//     console.log(data)
//   }

// async function getData(){
  
//     const response=await axios.get('https://jsonplaceholder.typicode.com/todos');

//     console.log(response.data);


// }

const [data,setData]=useState([]); 
const getData=async ()=>{

  const listImage=await axios.get('https://picsum.photos/v2/list');

  setData(listImage.data);
  console.log(listImage.data);
}


  return (
    <>
    <div>
      <button onClick={getData}>Get Data
      </button>

      {data.map(function(elem,id){
        return <div> <h2>Hello {id} {elem.author}</h2>
                <img src={elem.download_url} alt=""  width='100px'/> </div>;
      })}
    </div>
      
    </>
  )
}

export default App
