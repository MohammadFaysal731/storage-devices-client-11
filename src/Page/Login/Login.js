import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../ShearPage/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <div>

            <Form className='w-50 mx-auto border border-dark rounded p-3 m-5 '>
                <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="btn btn-outline-dark w-100" type="submit">
                    Login
                </Button>
                <p>New To Storage Devices ?
                    <button onClick={handleRegister} type="button" class="btn btn-link text-decoration-none">Register</button>
                </p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;