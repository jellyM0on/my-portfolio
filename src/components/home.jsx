import Shape from "./shape"

export default function Intro() {
    return(
      <div className='h-[100%]  overflow-auto relative  border box-border border-r-4 sm:border-r-0 border-black flex flex-col content-between'>
        <h1 className='text-[6.5em] leading-[0.80em] sm:text-[5em] lg:text-[8em]'>HELLO,<br></br>I'M YLANA<br></br></h1>
        <div className=' py-[4em] text-[1.5em] w-[80%] ml-1 sm:text-[1.25em] lg:text-[2em] sm:py-[2em] flex flex-col h-full justify-between'>
            <p>I’m a Computer Science student with an interest in web development.
                This site was built to display my personal projects as well as to learn more about AWS technologies. 
            </p>
            
            <p className='pt-[2em]'>Contact: ylana.ong@gmail.com</p>
        </div>
        <div className='absolute top-[40%] right-10 w-[50%] h-[50%] sm:w-[50%] sm:h-[40%]'>
            <Shape/>
        </div>
      </div>
    )
}