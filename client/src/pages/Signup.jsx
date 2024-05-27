import React from 'react'

import { FaUser } from "react-icons/fa";
import { FaLock ,FaTimes} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../style/login.css'
import Login from './Login';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../store/auth';
import { useNavigate } from 'react-router-dom';


function Signup({ onClose }) {
  const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
const navigate = useNavigate();
    
  return (
    <main  className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm shadow-md " >
        <div  className='text-white h-[100vh] flex justify-center items-center bg-cover'>
        <div className='Auth rounded-2xl  bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group'>
        <FaTimes onClick={onClose} className="absolute top-3 right-4 text-white cursor-pointer" />

            <form action=''  onSubmit={(e) => {
                        e.preventDefault()
                        if (password !== confirmPassword) {
                          alert('Passwords do not match');
                          return;
                        }
                        dispatch(signup({ email, password,fullName }))
                        onClose()
                    }}>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='fullName' required onChange={(e) => {
                                setFullName(e.target.value)
                            }}/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='email' required onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                    <MdEmail className='icon'/>
                    
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='password' required  onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                    <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='confirm password' required onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}/>
                    <FaLock className='icon'/>
                </div>
              
                <button  onClick={(e) => {
                            e.preventDefault()
                            dispatch(signup({ email, password ,fullName}));
                                navigate('/auth')
                            
                        
                        }}>Register</button>
                {/* <div >
              <p>
                Already have an account? <a style={{ cursor: 'pointer' }} onClick={onClose}>Login</a>
              </p>
            </div> */}


            </form>

        </div>
        {/* <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div> */}
        

    </div>
    </main>
  )
}

export default Signup
