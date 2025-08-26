import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Image() {
    const [product, setProduct] = useState()
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.log('Error in API', error))
    }, [id])

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Image of {product.title}</h2>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", borderRadius: "10px" }}
            />
        </div>
    )
}