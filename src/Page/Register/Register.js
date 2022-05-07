import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../ShearPage/SocialLogin/SocialLogin';
import { FiLogIn } from 'react-icons/fi';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../ShearPage/Loading/Loading';
const Register = () => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    let errorElement;

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        navigate('/login')
    }
    if (emailUser) {
        console.log(emailUser)
    }
    if (emailLoading || sending) {
        return <Loading></Loading>
    }
    if (emailError || verificationError) {
        errorElement = <p className='text-danger'>{emailError?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const phone = phoneRef.current.value;
        if (name && phone) {

            await sendEmailVerification();
            alert('Sent email')
            await createUserWithEmailAndPassword(email, password);
            navigate(from, { replace: true });
        }


    }


    return (
        <div>

            <Form onSubmit={handleRegister} className='w-50 mx-auto border border-dark rounded p-3 m-5 '>
                <h3>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="Phone" />
                </Form.Group>
                {errorElement}
                <Button variant="btn btn-outline-dark w-100" type="submit">
                    Register<FiLogIn className='mx-2'></FiLogIn>
                </Button>
                <p>Already Have An Storage Devices ?
                    <button onClick={handleLogin} type="button" className="btn btn-link text-decoration-none">Login</button>
                </p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;