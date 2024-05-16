import React, { useState } from 'react'
import './auth.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from 'react-redux';

function SignOut() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className='flex justify-center items-center mt-20'>

            <div className='Auth'>
                <form action=''>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='email' required />
                        <MdEmail className='icon' />

                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='confirm password' required />
                        <FaLock className='icon' />
                    </div>

                    <button type='submit'>Register</button>



                </form>

            </div>
        </div>
    )
}

export default SignOut