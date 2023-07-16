import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'; 
import Intro from './components/home';
import NavBar from './components/navbar'
import Project from './components/projects';
import StarsCanvas from './components/stars'

document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty('--x',(e.clientX)+'px');
  document.documentElement.style.setProperty('--y',(e.clientY)+'px');
}


function App() {

  return(
    <div className=' w-screen h-screen border-4 border-black box-border'>
      <span className='cursor'></span>
    {/* body  */}
    <NavBar/>
    <div className='grid grid-cols-2 h-full box-border'>
      <Intro/>
      <Project/>

    </div>
  
    </div>
  )
}

export default App
