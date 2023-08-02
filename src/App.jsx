import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'; 
import Intro from './components/home';
import NavBar from './components/navbar'
import Project from './components/projects';
import Contact from './components/contact';
import ColorPicker from './components/colorPicker';
//cursor
function changeCursorPosition(e){
  document.documentElement.style.setProperty('--x',(e.pageX)+'px');
  document.documentElement.style.setProperty('--y',(e.pageY)+'px');
}
document.body.onmousemove = function(e) {
 changeCursorPosition(e); 
}


function App() {

  return(
    <div className='mx-10 border-box border-4 border-black box-border relative'>
      <NavBar/>
      <ColorPicker/>
      <Intro/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
