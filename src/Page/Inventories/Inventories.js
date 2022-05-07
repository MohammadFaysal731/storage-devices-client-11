import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className="container">
            <h1 className='m-4 text-center'>Inventories</h1>

            <Row xs={1} md={2} className="g-4">
                {
                    inventories.map(inventory => <Inventory
                        inventory={inventory}
                        key={inventory.id}
                    ></Inventory>)
                }

            </Row>
        </div>

    );
};

export default Inventories;