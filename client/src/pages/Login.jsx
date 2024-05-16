import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLock, FaTimes } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import '../style/login.css'
import Signup from './Signup';
import { useDispatch } from 'react-redux';
import login from '../store/auth'


function Login({ onClose, openSignup }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate()
    const [showSignup, setShowSignup] = useState(false);

    const handleShowSignup = () => {
        setShowSignup(true);
    };

    return (
        <main
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm shadow-md ">



            <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>

                <div className='Auth rounded-2xl  bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group'>

                    <FaTimes onClick={onClose} className="absolute top-3 right-4 text-white cursor-pointer" />

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        dispatch(login({ email, password }))
                    }}>
                        <h1 className='font-semibold text-white'>Login</h1>
                        <div className='input-box'>
                            <input type="email" placeholder='email' required onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            <MdEmail className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder='password' required onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label >
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">Forgot password</a>
                        </div>
                        <button type='submit' onSubmit={(e) => {
                            e.preventDefault()
                            dispatch(login({ email, password }));
                        }}>Submit</button>
                        <div className="register-link">
                            <p ><a style={{ cursor: 'pointer' }} onClick={openSignup} >register</a></p>
                        </div>


                    </form>

                </div>

                {/* <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div> */}


            </div>

            {showSignup && <Signup onClose={() => setShowSignup(false)} />}
        </main>
    )
}

export default Login