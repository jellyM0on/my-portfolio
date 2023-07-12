import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'; 
import Intro from './components/home';
import Links from './components/links'
import Project from './components/projects';
import StarsCanvas  from './components/Stars'



function App() {
  return(
   <div className='p-10 bg-black text-white w-screen h-full overflow-y-hidden grid grid-rows-2 grid-cols-4'>
      <Intro/>
      <Links/>
      <Project/>
      <StarsCanvas/>
   

  
   </div>
  )
  
}

export default App
