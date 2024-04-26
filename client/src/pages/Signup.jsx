import React from 'react'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../style/login.css'


function Signup() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300" >
        <div  className='text-white h-[100vh] flex justify-center items-center bg-cover'>
        <div className='Auth rounded-2xl  bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group'>
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
        <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

    </div>
    </main>
  )
}

export default Signup
