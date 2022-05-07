import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const InventoryItems = () => {
    const [item, setItem] = useState([]);

    const { _id, name, img, description, price, quantity, supplierName, sold, } = item;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/627660dbe09e75a2b819b954`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center m-3'>Inventory item:</h1>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <h3>{name}</h3>
                            <p> {description}</p>
                            <h3>${price}.00</h3>
                            <h5>Quantity:{quantity} Pcs</h5>
                            <p title={supplierName}></p>
                            <h5>Sold:{sold}</h5>
                            <Button variant="outline-dark w-100">
                                Delivered
                            </Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className='p-5'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <h4 className='text-center'>ADD STOCK</h4>
                                <Form.Control type="text" placeholder="Add Stock" />
                            </Form.Group>
                            <Button variant="outline-dark w-100" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default InventoryItems;