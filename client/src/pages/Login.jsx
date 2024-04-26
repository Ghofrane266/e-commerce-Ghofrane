import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLock } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import '../style/login.css'


function Login() {
  const navigate=useNavigate()
 
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300" >
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>

      <div className='Auth rounded-2xl  bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group'>
                <form>
                    <h1 className='font-semibold text-white'>Login</h1>
                    <div className='input-box'>
                        <input type="email" placeholder='email' required />
                        <MdEmail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label >
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forgot password</a>
                    </div>
                    <button type='submit' >Submit</button>
                    <div className="register-link">
                        <p ><a style={{ cursor: 'pointer' }} onClick={()=>navigate("signup")} >Register</a></p>
                    </div>


                </form>

            </div>

            <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
            
       
      </div>
    </main>
  )
}

export default Login