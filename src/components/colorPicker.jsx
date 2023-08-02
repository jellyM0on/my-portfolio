import { useState, useEffect } from "react"

export default function ColorPicker() {
    const [color, setColor] = useState(''); 

    function changeColor(e){
        let classes = e.target.className; 
        let color = classes.split(' ')[1]
        
        switch(color){
            case 'bg-white': 
                setColor('#ffffff') 
                break; 
            case 'bg-black': 
                setColor('#000000')
                break; 
            case 'bg-pink-500': 
                setColor('#f8b8f1')
                break;
            case 'bg-green-500': 
                setColor('#93c47d')
                break;

        }
    }

    useEffect(() => {
        console.log(color); 
        document.documentElement.style.setProperty('--colorbg',`${color}`);
    }, [color])

    return(
        <div className='absolute right-[calc(1rem)] colorpicker-btns'>
            <div className='colorpicker bg-black' onClick={changeColor}></div>
            <div className='colorpicker bg-white border-black border-2' onClick={changeColor}></div>
            <div className='colorpicker bg-pink-500 ' onClick={changeColor}></div>
            <div className='colorpicker bg-green-500' onClick={changeColor}></div>
        </div>
    )
}