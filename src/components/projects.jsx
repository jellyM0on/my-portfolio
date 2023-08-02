import info from '../assets/info.json'
import Shape from './shape';

import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });


export default function Project(){
    const projects = info.projects; 


    const ProjectCard = (props) => {
        const { project } = props; 
        return(
           <div className='border-2 border-black pb-4'>
            <div className='flex w-full justify-center gap-1 my-2'>
                <div className='circle-decor'></div>
                <div className='circle-decor'></div>
                <div className='circle-decor'></div>
            </div>

                <h3 className='text-[calc(1vw+1em)] pl-4 font-bold'>{project.title}</h3>
                <div className='p-4 usm:flex usm:flex-col usm:items-center'>
                    {project.vid ? 
                    <iframe src={project.vid} allowFullScreen='allowfullscreen' frameBorder="0" className='float-left usm:float-none w-[70%] mr-4'></iframe>
                    :
                    <img src={project.img} className='float-left w-[70%] mr-4 usm:float-none  '></img>
                    }
                    <p className='text-[calc(0.5vw+0.75em)] text-justify usm:py-2'>{project.description}</p>
                    <div className='flex gap-2 text-[calc(0.25vw+1em)] float-right'>
                            {project.link === "" ? <></>  : <a href={project.link} target="_blank" className='hover:underline project-btn'>Demo</a> }
                            {project.documentation === "" ? <></>  : <a href={project.documentation} target="_blank" className='hover:underline project-btn'>Github</a> } 
                    </div>
                </div>
           </div>
        )
    }

    return(
      <div className='m-2 mt-6'>
        <div className='flex items-center'>
            <div className='w-[4em] h-[4em] p-0'><Shape/></div>
            <h2 className='text-[calc(2.5vw+1em)]'>/My Projects</h2>
        </div>
    
        <div className='grid grid-cols-2 gap-[4em] mx-4 usm:flex usm:flex-col sm:flex sm:flex-col'>
           {projects.map((project, key) => <ProjectCard project={project} key={key}/>)}
        </div>
      </div>
    )
}