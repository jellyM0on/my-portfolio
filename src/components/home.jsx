import Shape from "./shape"
import { useState, useEffect } from "react"

export default function Intro() {
  const [about, setAbout] = useState(1); 

  function handleBtn(){
    // setAbout(2); 
    console.log('2')
  }

  const AboutMe = () => {
    return(
      <p className='text-[calc(1em+1vw)]'>I’m a Computer Science student with an interest in web development.
      I built this site to display some of my projects. 
    </p>
    )
  }

  const AboutTech = () => {
    return(
      <p className='text-[calc(1em+1vw)]'>My current skills are focused on the MERN stack, but I'm also learning Laravel on the side.
    </p>
    )
  }



    return(
      <div className='p-2 flex flex-col '>
        <div className='flex'>
          <div>
            <h1 className='text-[calc(3.5em+1vw)] usm:text-[calc(1.5em+1vw)] leading-[1em] mt-[2em]'>HELLO, I'M</h1>
            <h1 className='text-[calc(6.5em+1vw)]  usm:text-[calc(3.5em+1vw)] sm:text-[calc(5.5em+2vw)] leading-[0.80em]'>
            YLANA ONG
            </h1>
          </div>
        </div>
       
        <div className='self-end text-end w-[50%] usm:w-[90%] sm:w-[70%] mt-[4em] h-fit min-h-[15em]'>
          <div className='flex justify-end items-center'>
            <div className='w-[4em] h-[4em] p-0'><Shape/></div>
            <h3 className='text-[calc(2.5vw+1em)]'>/About Me</h3>
          </div>

         <div className='flex items-center gap-5'>
          <button onClick={() => about === 1 ? setAbout(2) : setAbout(1)} className='text-[calc(1.5em+1vw)]'>{about === 1 ? `<` : `>`}</button>
          {about === 1 ? <AboutMe/> : <AboutTech/>}
         </div>


        </div>
      </div>
    )
}