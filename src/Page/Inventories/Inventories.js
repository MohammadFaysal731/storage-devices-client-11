import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">
            <div className="d-flex justify-content-between m-3">
                <h2>Inventories</h2>
                <div >
                    <Link className='btn btn-outline-dark text-decoration-none fs-5 ' to='/manageInventories'>ManageInventories</Link>
                </div>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    inventories.map(inventory => <Inventory
                        inventory={inventory}
                        key={inventory._id}
                    ></Inventory>)
                }
            </Row>
        </div>

    );
};

export default Inventories;