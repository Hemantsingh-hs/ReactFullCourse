import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Card } from './components/Card'
import { useId } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [text,setText]=useState('');
  const idx=useId();

  const [note,setNote]=useState([]);
//  const t=setTitle(title);
//   const t1= setText(text);
  const submitForm=(e)=>{
         e.preventDefault();
        console.log("form submited");
        const newNote=[...note];
       newNote.push({title,text,id:Date.now()});
        setNote(newNote)
        console.log(newNote);
        setTitle('');
        setText('');
  }

const deleteNotes = (id) => {
  setNote(note.filter((item) => item.id !== id));
};

  return (
    <div className='h-screen bg-white text-black flex'>
      <form action="" className='flex p-10 w-1/2  items-start justify-between ' onSubmit={(e)=>{
        submitForm(e);
      }}>
        <div className='flex item-start flex-col w-1/2 gap-4'>
        <input type="text" placeholder='Enter Notes Heading ' className='px-5 py-2 border-2 rounded w-full' value={title} onChange={(e)=>{
          console.log(e.target.value);
          setTitle(e.target.value);
        }}/>

         <textarea type="text" placeholder='Enter Details ' value={text}className='px-5 h-32 py-2 border-2 rounded w-full items-start flex-row' onChange={(e)=>{
          console.log(e.target.value);
          setText(e.target.value);
         }}/>
        
        <button  className='bg-emerald-400 active:bg-green-200 text-black px-5 py-2 rounded'>Add Note</button>

        
        </div>
          
          
      </form>

 
    
      <div className=''>
        <img className='h-30 mr-10 w-80 rounded ' src="https://imgs.search.brave.com/SrwjblseKWC4RW-OZkPZtZ9XMJ19fJrWZWjb0lwL74E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xOC8xNy80Ni9u/b3RlcGFkLTIxNTQ1/ODFfNjQwLnBuZw" alt="" />
        <h3 className='text-center border-2 w-71 ml-5 bg-slate-600'>List of Notes</h3>
    
        {note.map(function(elem,idx){
          return <Card key={idx}  title={elem.title} text={elem.text} idx={elem.id} deleteNotes={deleteNotes} />;
        })}
       
      </div>
    </div>
  )
}

export default App
