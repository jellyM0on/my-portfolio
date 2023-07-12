import info from '../assets/info.json'

export default function Project(){
    const projects = info.projects; 

    const ProjectCard = (props) => {
        return(
            <div className='grid grid-cols-2 p-5  bg-white bg-opacity-20 rounded'>
                <div>
                    <h3 className='text-2xl font-semibold'>{props.title}</h3>
                    <p className='text-l'>{props.description}</p>
                    <p className='text-l'>{props.link}</p>
                </div>
                <img src={props.img} alt='project image'></img>
            </div>
        )
    }

    return(
        <div className='col-span-3  text-white'>
            <h2 className='text-4xl py-6 font-bold'>/My Projects</h2>
            {projects.map((p, key) => <ProjectCard title={p.title} description={p.description} link={p.link} img={p.img} key={key}/>)}
        </div>
    )
}