import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark mt-5 p-3'>
            <h4 className='text-center text-white '>Copyright &copy;{year} Storage Devices</h4>
            <div className="text-white text-center">
                <AiFillFacebook className='fs-3'></AiFillFacebook>
                <AiFillLinkedin className='fs-3'></AiFillLinkedin>
                <AiFillInstagram className='fs-3'></AiFillInstagram>
            </div>
        </footer>
    );
};

export default Footer;