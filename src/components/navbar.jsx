import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

export default function NavBar(){
    const WelcomeMarquee = () => {
        return(
            <div className='marquee overflow-hidden'>
                <div className='track'>
                  <div className='content'>welcome to my site! welcome to my site!
                  welcome to my site! welcome to my site!
                  welcome to my site! welcome to my site! welcome to my site! welcome to my site! welcome to my site!
                  </div>
        
                </div>
            </div>
        )
    }

    const Links = () => {
        return(
            <div className='flex'>
                <div className='border-x-4 border-black px-5 text-[1.5vw] flex items-center hover:bg-black hover:text-white'>
                    <a href='' >RESUME</a>
                </div>
                <div className='links flex border-x items-center gap-1 px-5'>
                    <a href='https://mail.google.com/mail/u/0/?fs=1&to=ylana.ong@gmail.com&su=SUBJECT&body=&tf=cm'><img src={mailIcon}></img></a>
                    <a href='https://github.com/jellyM0on'><img src={githubIcon}></img></a>
                    <a href='https://www.linkedin.com/in/28b8b6259/'><img src={linkedInIcon}></img></a>
                </div>
            </div>
        )
    }
    return(
        <div className='border-black border-b-4 flex  justify-between'>
            <WelcomeMarquee/>
            <Links/>
            {/* <Links/> */}
        </div>
        // <div className='col-start-4 justify-self-end pr-10 flex flex-col
        //  w-fit h-fit sticky top-10  '>
        //     <div className='links flex  '>
        //         <a href='https://mail.google.com/mail/u/0/?fs=1&to=ylana.ong@gmail.com&su=SUBJECT&body=&tf=cm'><img src={mailIcon}></img></a>
        //         <a href='https://github.com/jellyM0on'><img src={githubIcon}></img></a>
        //         <a href='https://www.linkedin.com/in/28b8b6259/'><img src={linkedInIcon}></img></a>
        //     </div>
        //     {/* <button className='text-right'>Resume</button> */}
        // </div>

    )
}