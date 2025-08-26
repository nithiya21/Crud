import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Update() {
    const [products, setProducts] = useState({ title: "", price: "", category: "" });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then(res => setProducts(res.data))
            .catch(error => console.error("Error in API", error));
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/product/${id}`, products)
            .then(res => {
                setProducts(res.data);
                alert("✅ Product Updated Successfully!");
                navigator("/");
            })
            .catch(error => console.error("Error in API", error));
    };

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#8ba5c0ff" }}>
            <Row className="justify-content-center w-100">
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-4">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4 text-primary fw-bold">
                                ✨ Update Product
                            </h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label className="fw-semibold">Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter product title"
                                        value={products.title}
                                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPrice">
                                    <Form.Label className="fw-semibold">Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter price"
                                        value={products.price}
                                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formCategory">
                                    <Form.Label className="fw-semibold">Category</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter category"
                                        value={products.category}
                                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                                        required
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => navigator("/")}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        className="px-4 fw-semibold"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
