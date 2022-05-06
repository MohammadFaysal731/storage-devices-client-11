import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import deals1 from '../../../images/deals/Apple iPad Pro(9.7-inch).png'
import deals2 from '../../../images/deals/i5 Apple iMac Desktop.png'
const DealOfTheDays = () => {
    return (
        <div>
            <h1 className='text-center m-4'>Deal OF The Days</h1>
            <Container className='container'>
                <Row className="g-3 ">
                    <Col xxs={6} className='border rounded m-2'>
                        <img src={deals1} alt="" style={{ width: "400px", height: "400px" }} />
                        <h3>Apple iPad Pro</h3>
                        <h5><del className='text-secondary'>$600.00</del> $450.00</h5>
                        <p>Apr 20, 2022 — iPad Pro range (2018): November 2018; iPad Pro range (2020): March 2020; iPad Pro range (2021): May 2021</p>
                        <h4>Quantity:50 pcs</h4>
                        <h5>Sold:Available</h5>
                    </Col>
                    <Col xxs={6} className='border rounded m-2'>
                        <img src={deals2} alt="" style={{ width: "400px", height: "400px" }} />
                        <h3>Apple iMac Desktop</h3>
                        <h5><del className='text-secondary'>$1250.00</del> $920.00</h5>
                        <p>Apr 25, 2022 — Apple unveiled the new 24-inch M1 iMac in April 2021, a radically redesigned desktop machine that comes in a range of fun colors</p>
                        <h4>Quantity:50 pcs</h4>
                        <h5>Sold:Available</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DealOfTheDays;
