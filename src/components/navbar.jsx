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
            <div className='flex'>
                <div className='border-x-4 border-black px-5 text-[calc(1em+1vw)]  flex items-center hover:bg-black hover:text-white'>
                    <a href='https://drive.google.com/file/d/1ifRBGN70QghMQ4xpkzEYCyqtsTvjHMjI/view?usp=drive_link' target='_blank'>RESUME</a>
                </div>
                <div className='links flex border-x items-center gap-1'>
                    <a href='https://mail.google.com/mail/u/0/?fs=1&to=ylanalor.ong@gmail.com&su=SUBJECT&body=&tf=cm' target='_blank'><img src={mailIcon}></img></a>
                    <a href='https://github.com/jellyM0on' target='_blank'><img src={githubIcon}></img></a>
                    <a href='https://www.linkedin.com/in/28b8b6259/' target='_blank'><img src={linkedInIcon}></img></a>
                </div>
            </div>
        )
    }
    return(
        <div className='sm:justify-end usm:justify-end border-black border-b-4 flex  justify-between h-[calc(2.5vw+1em)] sticky top-0 right-0 bg-white z-10'>
            <WelcomeMarquee/>
            <Links/>
        </div>
    )
}