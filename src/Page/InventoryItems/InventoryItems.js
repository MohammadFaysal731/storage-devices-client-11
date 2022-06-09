import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryItems = () => {
    const { id } = useParams();

    const [items, setItems] = useState([]);



    const { name, img, description, price, quantity, supplierName, sold, } = items;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id])

    const handelDelivered = () => {
        const newQuantity = parseInt(quantity) - 1;
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount) {
                    toast.success('Success Fully Delivered Is Done ');
                }
            })
    }

    const handelRestock = (event) => {
        event.preventDefault();
        const restock = event.target.restock.value;
        const newQuantity = parseInt(quantity) + parseInt(restock);
        console.log(restock);
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        event.target.reset();
    }

    return (
        <div className='container'>
            <h1 className='text-center m-3'>Inventory item</h1>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <h3>{name}</h3>
                            <p> {description}</p>
                            <h3>${price}.00</h3>
                            <h5>Quantity:{quantity}Pcs</h5>
                            <p title={supplierName}></p>
                            <h5>Sold:{sold}</h5>
                            <Button onClick={handelDelivered} variant="outline-dark w-100">
                                Delivered
                            </Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card className='p-5'>
                        <Form onSubmit={handelRestock}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <h4 className='text-center'>ADD STOCK</h4>
                                <Form.Control type="text" name='restock' placeholder="Add Stock" />
                            </Form.Group>
                            <Button variant="outline-dark w-100" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <div className="text-center m-4">
                <Link className='btn btn-outline-dark text-decoration-none fs-5 ' to='/manageInventories'>ManageInventories</Link>
            </div>

        </div>
    );
};

export default InventoryItems;