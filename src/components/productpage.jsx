import axios from "axios"
import { useEffect, useState } from "react"
import { Table, Button, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function Products() {
    const [products, setProducts] = useState([])
    const navigation = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/product")
            .then(res => setProducts(res.data))
            .catch(error => console.log("Error in API", error))
    }, [])
    const handleAdded = () => {
        navigation('/addproductpage')
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/product/${id}`)
            .then(res => {
                res => setProducts(res.data)
                alert('Product Deleted')
                location.reload();
            })
            .catch(error => console.log('Error in API'), error)

    }
    const handleUpdate = (id) => {
        navigation(`/updatepage/${id}`)
    }

    return (
        <Container className="mt-4 mainpage" >
            <h2 className="mb-4 text-center fw-bold" style={{ fontFamily: "'Poppins', sans-serif" }} >Product Details</h2>
            <Button onClick={() => handleAdded()} variant="success" className="add_btn">Product Add</Button>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.category}</td>
                            <td><Link to={`/imagepage/${item.id}`}>Image</Link></td>
                            <td>
                                <Button variant="outline-success" size="sm" style={{ minWidth: "80px" }}
                                    onClick={() => handleUpdate(item.id)}>Update</Button>{' '}
                                <Button variant="outline-danger" size="sm" style={{ minWidth: "80px" }}
                                    onClick={() => handleDelete(item.id)}> Delete </Button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container >
    )
}