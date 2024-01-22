import { useRef, useState, useEffect } from "react";

function Ref(){

    //Đếm ngược 30s, có nút start vào stop.
    const [countdown, setCountDown] = useState(30)

    const timeId = useRef()

    const handleStart = () => {

        timeId.current = setInterval(()=> {
            setCountDown(prev => prev  - 1)
        }, 1000)

    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    //lấy giá trị trước và sau
    const prevCountDown = useRef()

    useEffect(()=>{
        prevCountDown.current = countdown
    },[countdown])

    return(
        <div>
            <h3>{countdown > 0 ? countdown : 'Hết giờ'}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button><br></br>
            <i>Giá trị trước: <b>{countdown}</b></i><br></br>
            <i>Giá trị hiện tại: <b>{prevCountDown.current}</b></i>
        </div>
    )
}

export default Ref;