import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { FiDelete } from 'react-icons/fi';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);

    const navigate = useNavigate();

    const handelAddInventoryItem = () => {
        navigate('/addInventoryItem')
    }

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure To Delete')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = inventories.filter(inventory => inventory._id !== id);
                        setInventories(remaining);
                    }
                })
        }

    }
    console.log(inventories)
    return (
        <div className='container'>
            <h1 className='text-center m-3'>Manage Inventories</h1>
            <div className="d-flex justify-content-end">
                <button onClick={handelAddInventoryItem} className='btn btn-outline-dark'>Add New Item<BiMessageSquareAdd className='m-2 fs-4'></BiMessageSquareAdd></button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Inventory Name</th>
                        <th>Image</th>
                        <th>Pice</th>
                        <th>Quantity</th>
                        <th>Sold</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories?.map((inventory, index) => <tr
                            inventory={inventory}
                            key={inventory._id}
                            index={index}
                        >
                            <td>{index + 1}</td>
                            <td>{inventory.name}</td>
                            <td><img src={inventory.image} alt={inventory.name} style={{ width: '100px', height: '100px' }} /> </td>
                            <td>{inventory.price}</td>
                            <td>{inventory.quantity}</td>
                            <td>{inventory.sold}</td>
                            <td>
                                <button onClick={() => handleDelete(inventory._id)} className='btn btn-outline-dark d-flex justify-content-center align-items-center'>Delete<FiDelete className='m-2 fs-4'></FiDelete></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventories;