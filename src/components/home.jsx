import Shape from "./shape"

export default function Intro() {
    return(
      <div className='relative h-full border box-border border-r-4 border-black flex flex-col content-between'>
        <h1 className='text-[8vw] leading-[7vw]'>HELLO,<br></br> I'M YLANA<br></br>ONG</h1>
        <div className='py-[5vw] text-[1.5vw] w-[80%] ml-1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis neque ac turpis viverra mollis. 
                Nunc sed ligula non est elementum suscipit. 
            </p>
            <p className='py-[5vw]'>Contact: ylana.ong@gmail.com</p>
        </div>
        <div className='justify-end border-t-4 border-black items-center'>
            <p className='italic text-[1vw]'>inspired by brutalist design</p>
        </div>
        <div className='absolute bottom-[15%] right-10 w-[50%] h-[50%]'>
            <Shape/>
        </div>
      </div>
    )
}