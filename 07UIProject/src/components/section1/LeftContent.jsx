import React from 'react'
import { HeroText } from './HeroText';
import { Arrow } from './Arrow';


const App = () => {
  return (
    <ArrowUpRight />
  );
};

export default App;

export const LeftContent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between  '> 
    
     <HeroText/>
     <Arrow/>
    </div>
  ) 
}
