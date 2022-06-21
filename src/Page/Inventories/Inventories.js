import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className="container">
            <h1 className='text-center m-3'>Inventories</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    inventories.map(inventory => <Inventory
                        inventory={inventory}
                        key={inventory._id}
                    ></Inventory>)
                }
            </Row>
            <div className='text-center m-4'>
                <Link className='btn btn-outline-dark text-decoration-none fs-5 ' to='/manageInventories'>ManageInventories</Link>
            </div>
        </div>

    );
};

export default Inventories;