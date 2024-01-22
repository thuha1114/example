import video1 from './videos/video1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref){

    const vidRef = useRef()
    
    useImperativeHandle(ref, () => ({
        play(){
            vidRef.current.play()
        },
        pause(){
            vidRef.current.pause()
        },
        requestFullscreen(){
            vidRef.current.requestFullscreen()
        }
    }))

    return (
        <>
            <video 
                src={video1} 
                width='700px'
                ref={vidRef}
            />
        </>
    )
}

export default forwardRef(Video);