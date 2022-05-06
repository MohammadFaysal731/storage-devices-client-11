import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../ShearPage/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div>

            <Form className='w-50 mx-auto border border-dark rounded p-3 m-5 '>
                <h3>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                <Button variant="btn btn-outline-dark w-100" type="submit">
                    Register
                </Button>
                <p>New To Storage Devices ?
                    <button onClick={handleLogin} type="button" class="btn btn-link text-decoration-none">Login</button>
                </p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;