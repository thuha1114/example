import { useReducer, useRef } from "react";

//cách sử dụng useReducer
// 1. Initial Value.
// 2. Analize Actions
// 3. Reducer
// 4. Dispatch

//Tăng/giảm số lượng.

const initValue = 0


const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Hàm reducer nhận 2 đối số là: state và action
const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid Action!')
    }
}

//Thêm nội dung nhập từ input vào list, xóa nội dung bất kỳ ra khỏi list sau khi chọn xóa.
const initState = {
    job: '',
    jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return{
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return{
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return{
        type: DELETE_JOB,
        payload
    }
}

const reducer1 = (state, action) => {
    // console.log('Prev: ', state)
    // console.log('Current: ', action)

    let newState 

    switch(action.type){
        case SET_JOB:
            newState =  {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid Action')
    }
    return newState
}

function Reducer(){

    const inputRef = useRef()

    //hàm useReducer nhận 2 đối số là: hàm reducer và initialValue
    // const [count, dispatch] = useReducer(reducer, initValue)

    //Thêm nội dung nhập từ input vào list, xóa nội dung bất kỳ ra khỏi list sau khi chọn xóa.
    const [state, dispatch] = useReducer(reducer1 , initState)
    const {job, jobs} = state
    
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return(
        <>
            {/* <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button> */}

            <input 
                style={{margin: '0 10px'}}
                ref={inputRef}
                value={job}
                onChange={(e) => dispatch(setJob(e.target.value))}
            />

            <button onClick = {handleSubmit}>Add</button>

            {jobs.map((job,index) => (
                <li key={index}  style={{margin: '0 10px'}}>{job}
                    <span onClick={()=> dispatch(deleteJob(index))}> &times;</span>
                </li>
            ))}
        </>
    )
}

export default Reducer;