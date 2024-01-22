import { useState, useRef, useMemo } from "react";

function Memo(){

    // Tạo ứng dụng thêm sản phẩm vào giỏ hàng, khi bấm Thêm vào giỏ các input 
    // sẽ clear dữ liệu được nhập trước đó và focus vào input đầu tiên

    var [name, setName] = useState()
    var [price, setPrice] = useState()
    var [products, setProducts] = useState([])

    const firstInput = useRef()

    const handSubmit = () => {
        setProducts([...products,{
            name,
            price: +price
        }])
        setName('')
        setPrice('')
        firstInput.current.focus()
    }

    const total = useMemo(()=>{
        const result = products.reduce( (result, product) => result + product.price, 0)
        return result
    })

    return(
        <>
            <input 
                ref={firstInput}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter product's name ..."
            /><br></br>

            <input 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product's price ..."
            /><br></br>

            <button onClick={handSubmit}>Thêm sản phẩm</button><br></br>
            <h3>Thành tiền: {total}</h3>
            {products.map((product,index) => (
                <li key={index}>{product.name} - {product.price}</li>
            ))}
        </>
    )
}

export default Memo;