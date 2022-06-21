import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebaseConfig.init';

const AddInventoryItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const imageStorageApiKey = '45c46a1b32a1d6a38d670e42fa5d2349'
    const onSubmit = data => {
        const name = data.name;
        const description = data.description;
        const price = data.price;
        const quantity = data.quantity;
        const supplierName = data.supplierName;
        const sold = data.sold;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const newProduct = {
                        name: name,
                        description: description,
                        price: price,
                        quantity: quantity,
                        supplierName: supplierName,
                        sold: sold,
                        image: image,
                    }
                    fetch(`http://localhost:5000/inventories`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product add success fully');
                                reset()
                            }
                        })
                }
            })



    };

    return (
        <div>

            <div className='mx-auto w-50 shadow p-5 rounded-4' >
                <h4>Add Inventory Item</h4>
                <Form onSubmit={handleSubmit(onSubmit)} className='user-select-none'>
                    <Form.Group className="mb-3" controlId="formBasicProductName" >
                        <Form.Control type="email" value={user.email} autoComplete='off' readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProductName" >
                        <Form.Control {...register("name", { required: true })} type="text" placeholder="Product Name" autoComplete='off' />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea" label="Product Description" className="mb-3">
                        <Form.Control {...register("description", { required: true })} as="textarea" autoComplete='off' />
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Control {...register("price", { required: true })} type="number" placeholder="Product Price" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity" >
                        <Form.Control {...register("quantity", { required: true })} type="number" placeholder="Product Quantity" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplierName">
                        <Form.Control {...register("supplierName", { required: true })} type="text" placeholder="Product SupplierName" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSold" >
                        <Form.Control {...register("sold", { required: true })} type="text" placeholder="Product sold" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImage" >
                        <Form.Control {...register("image", { required: true })} type="file" placeholder="Product image" autoComplete='off' />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" className='w-100'>
                        Add New Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddInventoryItem;