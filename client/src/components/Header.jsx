import React from 'react'
import "./header.css"
import hero from '../assets/hero.mp4'
function Header() {
    return (
      
            <div className="containn">
                <video src={hero} autoPlay loop muted/>
                <section className='content'>
                    <div>
                        <p >
                            Discover the perfect template to showcase your brand's unique identity
                        </p>
                    </div>
                <div className='div d-flex justify-content-center'>
                    <input type="text" placeholder='logo@gmail.com' />
                    <button className=' btn btnn'>Get Started</button>
                </div >
        </section>
                </div >


  )
}

export default Header