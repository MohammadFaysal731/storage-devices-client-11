import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://serene-headland-49364.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">
            <h1 className='m-4 text-center'>Inventories</h1>
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