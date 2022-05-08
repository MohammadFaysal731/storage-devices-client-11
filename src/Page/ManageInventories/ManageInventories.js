import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FiDelete } from 'react-icons/fi';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    // id, name, image, description, price, quantity, supplier name, sold
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center m-3'>ManageInventories</h1>
            {
                inventories.map(inventory =>
                    <div inventory={inventory}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td className='visually-hidden'>{inventory._id}</td>
                                    <td>{inventory.name}</td>
                                    <td title={inventory.description}>{inventory.description.length < 20 ? inventory.description.slice(0, 20) : inventory.description.slice(0, 20) + "....."}{inventory.description}</td>

                                    <td>{inventory.price}</td>
                                    <td>{inventory.quantity}</td>
                                    <td title={inventory.supplierName}>{inventory.supplierName.length < 20 ? inventory.supplierName.slice(0, 20) : inventory.supplierName.slice(0, 20) + "...."}</td>
                                    <td>{inventory.sold}</td>
                                    <td>
                                        <button className='btn btn-outline-dark d-flex justify-content-center align-items-center'>Delete<FiDelete className='m-2 fs-4'></FiDelete></button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                )
            }



        </div>
    );
};

export default ManageInventories;