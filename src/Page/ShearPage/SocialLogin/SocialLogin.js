import React from 'react';
import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
    return (
        <div>
            <div className="">
                <p className='text-center fs-4'>or</p>
                <button className="btn btn-outline-dark w-100">
                    <FcGoogle className='fs-4 mx-2'></FcGoogle>Google Sing in
                </button>
            </div>


        </div >
    );
};

export default SocialLogin;