import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark mt-5 p-3' fixed="bottom">
            <h4 className='text-center text-white '>Copyright &copy;{year} Storage Devices</h4>
            <div className="text-center">
                <a href="https://www.google.com/search?q=facebook.com+login&oq=facebook.&aqs=chrome.1.69i57j35i39j0i512j69i60l3j5i44j69i60.9422j0j7&sourceid=chrome&ie=UTF-8" className="text-white"><AiFillFacebook className='fs-3'></AiFillFacebook></a>
                <a href="https://www.google.com/search?q=linkedin.com+login&sxsrf=ALiCzsavYlKH5xBr1Xy5AKZ3_eJyESOj-g%3A1651770676894&ei=NAV0Yp6JNp6OseMP49-z0A8&oq=lin.com+login&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQBxAeMgYIABAHEB4yCAgAEAcQChAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB5KBAhBGABKBAhGGABQAFiTA2CDFGgAcAF4AIABd4gB2AKSAQMwLjOYAQCgAQHAAQE&sclient=gws-wiz" className="text-white"><AiFillLinkedin className='fs-3'></AiFillLinkedin></a>
                <a href="https://www.google.com/search?q=instagram+login&sxsrf=ALiCzsZCU0HEw9rxkI2V7ow6cw7shOFLEg%3A1651770720196&ei=YAV0YuXKC4STseMP9omk4AY&oq=ins+login&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeSgQIQRgASgQIRhgAUABYzAJgyQ9oAHABeACAAZgBiAH_ApIBAzAuM5gBAKABAcABAQ&sclient=gws-wiz" className="text-white"><AiFillInstagram className='fs-3'></AiFillInstagram></a>
            </div>
        </footer>
    );
};

export default Footer;