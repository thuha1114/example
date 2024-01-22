import { useRef } from "react";
import Video from "./Video";

function ImperativeHandle(){

    const vidRef = useRef()
    
    const handlePlay = () => {
        vidRef.current.play()
    }

    const handlePause = () => {
        vidRef.current.pause()
    }

    const handleFullScreen = () => {
        vidRef.current.requestFullscreen()
    }
    return(
        <div>
            <Video ref={vidRef}/>
            <br></br>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleFullScreen}>Full Screen</button>
        </div>
    )
}

export default ImperativeHandle;