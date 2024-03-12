import React from 'react'
import './auth.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function SignOut() {
  return (
    <div className='Auth'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required />
                    
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>
              
                <button type='submit'>Register</button>
             


            </form>

        </div>
  )
}

export default SignOut