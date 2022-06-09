import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Product from './Product/Product';

const FeaturesProducts = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productsCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 3);
                setPageCount(pages)
            })
    }, [])

    return (
        <div className="container border border-success mt-3">
            <h1 className='text-center m-3'>Features Products</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                    ></Product>)
                }
            </Row>
            <div className=''>
                <div className="d-flex justify-content align-items-center mt-3">
                    {
                        [...Array(pageCount).keys()].map(number =>
                            <button
                                className={page === number ? 'btn btn-success m-2' : 'btn btn-outline-dark m-2'}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <Form.Select style={{ width: '60px' }} aria-label="Default select example" onChange={e => setSize(e.target.value)}>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    );
};

export default FeaturesProducts;