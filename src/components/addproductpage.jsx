import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Added() {
    const [products, setProducts] = useState({ title: "", price: "", category: "" });
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/product", products)
            .then(res => {
                setProducts({ title: "", price: "", category: "" });
                alert("✅ Product Added Successfully!");
                navigator("/");
            })
            .catch(err => console.log("Error in API", err));
    };

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#8ba5c0ff" }}>
            <Row className="justify-content-center w-100">
                <Col md={6}>
                    <Card className="shadow p-4">
                        <h2 className="text-center mb-4">Add Product</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product title"
                                    value={products.title}
                                    onChange={(e) => setProducts({ ...products, title: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter price"
                                    value={products.price}
                                    onChange={(e) => setProducts({ ...products, price: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter category"
                                    value={products.category}
                                    onChange={(e) => setProducts({ ...products, category: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="primary" type="submit" className="px-5">
                                    Add Product
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
