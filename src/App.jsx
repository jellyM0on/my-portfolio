import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'; 

import StarsCanvas  from './components/Stars'

function App() {
  return(
   <div className='bg-black h-screen w-screen border'>
    {/* <p >Test</p> */}
    <StarsCanvas/>
   </div>
  )
  
}

export default App
