import {useState} from 'react'
import './App.css'


//Cách sử dụng useState()
function State() {
  
  const [counter, setCounter] = useState(1)

  //tạo một nút khởi tạo là số 1, sau mỗi lần click vào nút đó thì sẽ tăng lên 1 đơn vị, nếu giá trị bằng 10 thì không tăng nữa
  const handleIncrease = () =>{
    setCounter (counter + 1)
    if(counter >= 10){
      setCounter(10)
    }
  }

  //Update thông tin
  const [info, setInfo] = useState({
    name:'Thu Ha',
    dob: '14/11/2002',
    address: 'Dak o, BGM, BP'
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      favorite:'travel'
    })
  }

  //Ban đầu khởi tạo thông báo không có phần thưởng, sau khi click vào nút nhận thưởng thì sẽ hiển thị random phần thưởng trong mảng gifts

  const gifts = ['100k','vé xem phim','được bao ăn']
  const [gift, setGift] = useState()

  const handleGift = () =>{
    var index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  //Lấy dữ liệu từ form

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [infor, setInfor] = useState('')

  const handleSubmit = () =>{
    setInfor({
      name,
      email
    })
  }

  //Xử lý dữ liệu dạng radio
  const courses = [
    {
      id:1,
      name:'ReactJS'
    },
    {
      id:2,
      name:'Javascript'
    },
    {
      id:3,
      name:'NodeJS'
    }
  ]

  const [checked, setChecked] = useState()

  const handleRadio = () =>{
    console.log({id: checked})
  }

  //Xử lý form dạng checkbox

  const [cb, setCb] = useState([])

  const handleCb = (id) =>{
    setCb( prev => {
      const isChecked = cb.includes(id)
      if(isChecked){
        return cb.filter(item => item !== id)
      }
      else{
        return [...prev, id]
      }
    })
  }

  const handleCheckbox = () =>{
    console.log({ids: cb})
  }

  //Ghi dữ liệu vào ô input, sau khi nhấn Add dữ liệu sẽ được thêm vào list và hiển thị ra màn hình, sau đó dữ liệu sẽ được lưu vào localstorage

  const [job, setJob ] = useState()
  //Nếu trên localStorage không có item nào là jobs thì khởi tạo là mảng rỗng và ngược lại.
  const [jobs, setJobs] = useState(() => {
    var storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ? storageJobs : []
  })

  const handleAdd = () =>{
    setJobs(prev => {
      var jobs = [...prev, job]

      localStorage.setItem('jobs', JSON.stringify(jobs))

      return jobs
    })
    setJob('')
  }

  const handleClear = () => {
    setJobs([])
    localStorage.removeItem('jobs')
  }

  //Tăng giảm số lượng

  var [curNum, setCurNum] = useState(1)

  const handleDec = () => {
    setCurNum(curNum - 1)
    if(curNum === 1){
      setCurNum(1)
      alert('Số lượng tối thiểu là 1')
    }
  }

  const handleInc = () => {
    setCurNum(curNum + 1)
    if(curNum === 10){
      setCurNum(10)
      alert('Số lượng tối đa là 10')
    }
  }

  //Tạo nút Toggle

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      
      {/* Tăng số */}
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      {/* Update thông tin */}
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update Info</button>

      {/* Phần thưởng */}
      <h1>{gift || 'Chưa có phần thưởng!'}</h1>
      <button onClick={handleGift}>Nhận thưởng</button><br></br>
      
      {/* Lấy thông tin từ form */}
      <input
        value = {name}
        onChange={e =>setName(e.target.value)}
      />
      <input
        value = {email}
        onChange = {e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <h1>{JSON.stringify(infor)}</h1>

      {/* Xử lý dữ liệu dạng radio */}
      {courses.map(course => 
        <div key = {course.id}>
          <input
            type='radio'
            checked = {checked === course.id}
            onChange = {() => setChecked(course.id)} 
          />
          <i>{course.name}</i>
        </div>  
      )}
      <button onClick = {handleRadio}>Xác nhận</button>

      {/* Xử lý form dạng checkbox */}
      {courses.map(course =>
        <div key={course.id}>
          <input 
            type='checkbox'
            cb = {cb.includes(course.id)}
            onChange = {() => handleCb(course.id)}
          />
          <b>{course.name}</b>
        </div>
      )}
      <button onClick= {handleCheckbox}>Xác nhận</button><br></br>

      {/* Xử lý dữ liệu được nhập thêm vào list */}
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm công việc</button>
      <ul>
        {jobs.map( (job, index) => 
          <li key={index}>{job}</li>
        )}
      </ul>
      <button onClick={handleClear}>Reset</button><br></br>

      {/* Tăng giảm số lượng */}
      <button onClick={handleDec}>Giảm</button>
      <input
        value={curNum}
        onChange = {e => setCurNum(e.target.value)}
      />
      <button onClick = {handleInc}>Tăng</button><br></br>

      {/* Tạo nút Toggle */}
      <button onClick={() => setShow(!show)}>Show</button>
      {show && (
        <h1>Làm nãy giờ cũng xong!</h1>
      )}
    </div>
  );
}

export default State;

