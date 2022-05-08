import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FiDelete } from 'react-icons/fi';


const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://serene-headland-49364.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://serene-headland-49364.herokuapp.com/inventory`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };




    const handleDelete = id => {
        const url = `https://serene-headland-49364.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
    }

    return (
        <div className='container'>
            <h1 className='text-center m-3'>Manage Inventories</h1>
            <div className="text-center mb-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-75' {...register("img", { required: true, maxLength: 20 })} />
                    <input type="submit" value='Add Item' />
                </form>
            </div>

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
                                        <button onClick={() => handleDelete(inventory._id)} className='btn btn-outline-dark d-flex justify-content-center align-items-center'>Delete<FiDelete className='m-2 fs-4'></FiDelete></button>
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