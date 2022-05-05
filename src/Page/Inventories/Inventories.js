import React from 'react';
import { Row } from 'react-bootstrap';
import useInventories from '../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventories([]);
    return (
        <div className="container">
            <h1 className='m-4'><u>Inventories</u></h1>

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