import React from 'react'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='Auth mt-5'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='email' required />
                    <MdEmail className='icon'/>
                    
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required />
                    <FaLock className='icon'/>
                </div>
              
                <button type='submit'>Register</button>
             


            </form>

        </div>
    </div>
  )
}

export default Signup
