import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'; 
import Intro from './components/home';
import NavBar from './components/navbar'
import Project from './components/projects';


document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty('--x',(e.clientX)+'px');
  document.documentElement.style.setProperty('--y',(e.clientY)+'px');
}


function App() {

  return(
    <div className='w-screen h-screen border-box sm:h-fit border-4 border-black box-border max-h-[1300px]'>
      <span className='cursor'></span>
      <NavBar/>
      <div className='grid grid-cols-2 sm:flex sm:flex-col h-[calc(100%-3.5vw)] sm:h-full'>
        <Intro/>
        <Project/>
    </div>
  
    </div>
  )
}

export default App
