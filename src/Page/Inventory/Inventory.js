import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, supplierName, sold } = inventory;

    const navigate = useNavigate();

    const handelUpdate = id => {
        navigate(`/inventory/${id}`)
    }


    return (
        <div className="">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='p-3 border-dark rounded-3'>
                        <Card.Img variant="top" src={img} className="border border-success rounded-3" style={{ width: "400", height: "400px" }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <p className='visually-hidden'>{_id}</p>
                            <Card.Text title={description}>{description.length < 60 ? description.slice(0, 60) : description.slice(0, 60) + "....."}</Card.Text>
                            <h3>${price}.00</h3>
                            <h5>Quantity:{quantity} Pcs</h5>
                            <p title={supplierName}>SupplierName:{supplierName.length < 60 ? supplierName.slice(0, 60) : supplierName.slice(0, 60) + "...."}</p>
                            <h5>Sold:{sold}</h5>
                            <Button onClick={() => handelUpdate(_id)} variant="outline-dark w-100">Update</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>

    );
};

export default Inventory;