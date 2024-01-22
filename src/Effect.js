import { useEffect, useState } from "react";

//Cách dùng useEffect()
function Effect(){

    //Gõ chữ vào input thì dữ liệu sẽ cập nhật đồng thời trên title của trang web
    const [title, setTitle] = useState('')

    //Call API, hiển thị title của 100 sản phẩm.
    const [posts, setPosts] = useState([])

    //API sẽ thay đổi dữ liệu ghi chọn vào các tabs trên trang!
    const tabs = ['posts', 'comments', 'albums', 'photos']
    const [type, setType ] = useState('posts')
    
    //ẩn hiện button
    const [showBtn, setShowBtn] = useState(false)

    useEffect( () => {
        document.title = title
           //cách gọi API
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts =>{
                setPosts(posts);
            })
    },[type])

    //Chức năng tìm kiếm
    useEffect(() => {

        document.title = title
        
        
        //cách gọi API
        if(title !== ''){
            if(type === 'posts' || type === 'albums'){
                var results = posts.filter( post => 
                    post.title.toLowerCase().includes(title.toLowerCase())
                );
                setPosts(results)
            }
            else if(type === 'comments'){
                var result = posts.filter(post => 
                    post.name.toLowerCase().includes(title.toLowerCase())
                );
                setPosts(result)
            }
        }
        else{
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts =>{
                setPosts(posts);
            })
        }

    }, [title, type])


    //khi kéo trang xuống 800px hiện icon "arrow-top" và ngược lại, nếu khoảng cách nhỏ hơn 800px thì ẩn icon đó 
    
    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior:"smooth"})
    }

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY >= 800){
                setShowBtn(true)
            }
            else{
                setShowBtn(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        //cleanup function được gọi trước khi unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    //Hiển thị độ rộng của trình duyệt khi điều chỉnh kích thước.
    const [width, setWidth] = useState(window.innerWidth)

    useEffect( () => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)

        //cleanup function
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    }, [])

    //Đếm ngược 10s
    const [countdown, setCountdown] = useState(10)

    useEffect(()=>{

        const time = setInterval(()=>{
            setCountdown(prev => prev - 1)
        }, 1000)

        //cleanup function
        return () => clearInterval(time)
    },[])

    //chọn hình ảnh làm avt, sau khi chọn cho phép xem trước hình ảnh đó.

    const [avt, setAvt ] = useState()

    useEffect(()=>{
        return () => {
            avt && URL.revokeObjectURL(avt.preview)
        }
    },[avt])


    const handlePreviewAvt = (e) => {

        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvt(file)
    }

    //Tạo fake Chat

    const [courseId, setCourseId] = useState(1)
    const courses = [
        {
            id: 1,
            name: 'Học ReactJS'
        },
        {
            id:2,
            name:'Học NodeJS'
        },
        {
            id:3,
            name: 'Học Kotlin'
        },
    ]

    useEffect(()=>{

        const handleCourseId = ({detail}) => {

            const i = document.createElement("i")
            i.innerHTML = detail
            document.getElementById(`course-${courseId}`).appendChild(i)
            const br = document.createElement("br")
            document.getElementById(`course-${courseId}`).appendChild(br)

        }
        
        window.addEventListener(`lesson-${courseId}`, handleCourseId)

        return () => {
            window.removeEventListener(`lesson-${courseId}`, handleCourseId)
        }
    },[courseId])


    // Xuất hiện course có id=1 và 3 
    const [kq, setKq] = useState([])
    useEffect(()=>{
      const result = courses.filter(item => item.id === 1 || item.id ===3)
      setKq(result)
    },[])
    
    return(
        <div>
            <h1>Cách sử dụng useEffect</h1>

            {/* Xuất hiện course có id=1 và 3 */}
            {kq.map(p=>(
                <li key={p.id}>{p.name}</li>
            ))}
            {/* Countdown */}
            <h1>{countdown > 0 ? countdown : 'Hết giờ!'}</h1>

            {/* Hiển thị độ rộng của trình duyệt khi điều chỉnh kích thước. */}
            <h3>Độ rộng của trình duyệt hiện tại là: {width}</h3>

            {/* Tạo fake chat */}     
            {courses.map( course => (
                <div>
                    <li 
                        key={course.id}
                        style={{
                            color: courseId === course.id ? "red": "black"
                        }}
                        onClick= {() => setCourseId(course.id)}
                    
                    >
                        {course.name}
                    </li>
                    <i id={courseId === course.id ? `course-${course.id}` : "hide"}></i> 
                </div>
            ))} 
            
            <li
                style={{color: courseId === 0 ? "red" : "black"}}
                 onClick={() => setCourseId(0)}>Kết thúc</li>  

            {/*Gõ chữ vào input thì dữ liệu sẽ cập nhật đồng thời trên title của trang web */}
            <input 
                value={title}
                onChange = {e => setTitle(e.target.value)}
                // onChange = {handleSearch}
            /><br></br>

            {/* chọn hình ảnh làm avt, sau khi chọn cho phép xem trước hình ảnh đó. */}
            <input
                type="file"
                onChange = {handlePreviewAvt}
            /><br></br>
            {avt && (
                <img src={avt.preview} alt="Avt Preview" width="50%" />
            )}<br></br>

            {/* API sẽ thay đổi dữ liệu ghi chọn vào các tabs trên trang! */}
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick = {() => setType(tab)}
                    style = {type === tab ? {color:"white", background:"green"} : {}}
                >
                    {tab}
                </button>
            ))}
            {showBtn && (
                <i 
                    className="fa-solid fa-arrow-up"
                    style = {{position:'fixed', right: 20, bottom: 20, cursor:"pointer"}}
                    onClick={scrollToTop}
                >
                </i>
            )}

            {/* Call API, hiển thị title của 100 sản phẩm. */}
            <ul>
                <h3>{posts.length}</h3>
                {posts.map(post => (
                    <li key = {post.id}><b>Title: </b> {post.title || post.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default Effect;