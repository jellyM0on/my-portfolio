import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

export default function NavBar(){
    const WelcomeMarquee = () => {
        return(
            <div className='marquee overflow-hidden content  flex items-center'>
                <div className='track'>
                  <div className='content sm:text-[2em]'>welcome to my site! welcome to my site!
                  welcome to my site! welcome to my site!
                  welcome to my site! welcome to my site! welcome to my site! welcome to my site! welcome to my site!
                  </div>
        
                </div>
            </div>
        )
    }

    const Links = () => {
        return(
            <div className='flex '>
                <div className='border-x-4 border-black px-5 text-[1.5vw] sm:text-[1em] flex items-center hover:bg-black hover:text-white'>
                    <a href='' >RESUME</a>
                </div>
                <div className='links flex border-x items-center gap-1'>
                    <a href='https://mail.google.com/mail/u/0/?fs=1&to=ylana.ong@gmail.com&su=SUBJECT&body=&tf=cm'><img src={mailIcon}></img></a>
                    <a href='https://github.com/jellyM0on'><img src={githubIcon}></img></a>
                    <a href='https://www.linkedin.com/in/28b8b6259/'><img src={linkedInIcon}></img></a>
                </div>
            </div>
        )
    }
    return(
        <div className='sm:justify-end border-black border-b-4 flex  justify-between h-[3.5vw] sm:h-[10vw]'>
            <WelcomeMarquee/>
            <Links/>
        </div>
    )
}