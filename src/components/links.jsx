import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

export default function Links(){
    return(
        <div className='col-start-4 justify-self-end flex flex-col
         w-fit h-fit sticky top-10 left-10 '>
            <div className='links flex  '>
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=ylana.ong@gmail.com&su=SUBJECT&body=&tf=cm'><img src={mailIcon}></img></a>
                <a href='https://github.com/jellyM0on'><img src={githubIcon}></img></a>
                <a href='https://www.linkedin.com/in/28b8b6259/'><img src={linkedInIcon}></img></a>
            </div>
            <button className='text-right'>Resume</button>
        </div>

    )
}