import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { id, name, img, description, price, quantity, supplierName, sold } = product;
    return (
        <div>

            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='p-3 border-dark rounded-3'>
                        <Card.Img variant="top" src={img} className="border border-info rounded-3" style={{ width: "400", height: "400px" }} />
                        <Card.Body>
                            <Card.Title>{id}{name}</Card.Title>
                            <Card.Text title={description}>{description?.length < 60 ? description.slice(0, 60) : description.slice(0, 60) + "....."}</Card.Text>
                            <h3>${price}.00</h3>
                            <h5>Quantity:{quantity} Pcs</h5>
                            <p title={supplierName}>SupplierName:{supplierName?.length < 60 ? supplierName.slice(0, 60) : supplierName.slice(0, 60) + "...."}</p>
                            <h5>Sold:{sold}</h5>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </div>
    );
};

export default Product;