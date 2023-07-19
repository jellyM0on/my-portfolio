import info from '../assets/info.json'
import Shape2 from './shape2';

import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });


export default function Project(){
    const projects = info.projects; 

    const ProjectCard = (props) => {
        const { project } = props; 
        return(
           <div className='border-black border-t-2'>
            <details>
                <summary className='hover:bg-black hover:text-white'><h3 className='text-[1.5em] sm:text-[1.25em] lg:text-[2em] pl-1'><span></span>{project.title}</h3></summary>
                <div className='p-4 flex flex-col items-center gap-2'>
                    <img src={project.img} className='w-[75%]'></img>
                    <div className='flex gap-2 text-[1.25em] sm:text-[1em] lg:text-[1.5em]'>
                    {project.link === "" ? <></>  : <a href={project.link} className='hover:underline'>Site</a> }
                    {project.documentation === "" ? <></>  : <a href={project.documentation} className='hover:underline'>Github</a> } 
                    </div>
                    <p className='text-[1.25em] sm:text-[1em] text-justify lg:text-[1.5em]'>{project.description}</p>
                </div>
            </details>
           </div>
        )
    }

    return(
      <div className='h-full overflow-y-scroll sm:min-h-[100vw] border'>
        <h2 className='text-right text-[4em] sm:text-[2em] mr-4 sm:mr-1  '>/My Projects</h2>
        <div>
           {projects.map((project, key) => <ProjectCard project={project} key={key}/>)}
        </div>
        <div>
            {/* <Shape2/> */}
        </div>

      </div>
    )
}