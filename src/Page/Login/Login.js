import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../ShearPage/SocialLogin/SocialLogin';
import { FiLogIn } from 'react-icons/fi';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../ShearPage/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;

    const handleRegister = () => {
        navigate('/register')
    }

    if (user) {
        navigate('/blogs')
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (errorElement) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>

            <Form onSubmit={handleLogin} className='w-50 mx-auto border border-dark rounded p-3 m-5 '>
                <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="btn btn-outline-dark w-100" type="submit">
                    Login<FiLogIn className='mx-2'></FiLogIn>
                </Button>
                <p>New To Storage Devices ?
                    <button onClick={handleRegister} type="button" className="btn btn-link text-decoration-none">Register</button>
                </p>
                <p>Forget Password ? <button className='btn btn-link text-decoration-none'>Reset Password</button></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;