import React, { useState } from 'react'
import './auth.css'
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth';
import { MdEmail } from "react-icons/md";



function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center' style={{height:'100vh'}}>
        <div className='Auth'>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(login({ email, password }))
            }}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="email" placeholder='email' required onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                     <MdEmail className='icon'/>
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
                    <p ><a style={{ cursor: 'pointer' }} onClick={() => navigate("register")}>Register</a></p>
                </div>


            </form>

        </div></div>
    )
}

export default Login