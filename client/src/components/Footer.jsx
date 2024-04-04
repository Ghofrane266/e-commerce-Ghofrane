import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import '../style/home.css';

function Footer() {
  return (
    <>
      <div className="footer mt-5">

        <div style={{ color: "#052b57", marginTop: 80 }} className='d-flex justify-content-around'>
          <div className='col-12 col-lg-4 '  >
            <h1 style={{color:"#fff"}}>Logo</h1>
            <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo quaerat quam nam sed dignissimos.</p>
          </div>
          <div>
            <h4 style={{color:"#fff"}}>Learn</h4>
            <a href="" style={{ color: "#fff", textDecoration: "none", fontSize: 16 }}>About Us</a>
            <div>
              <a href="" style={{ color: "#fff", textDecoration: "none", fontSize: 16 }}>Blog</a>
            </div>

          </div>
          <div className='mx-2'>
            <h4 style={{color:"#fff"}}>Products</h4>
            <a href="" style={{ color: "#fff", textDecoration: "none", fontSize: 16 }}>E-commerce Websites</a>
          </div>
          <div>
            <h4 style={{color:"#fff"}}>Contact</h4>
            <div style={{color:"#fff"}}>
              <BsTwitterX style={{ marginLeftleft: 10 }} />
              Twitter
            </div>
            <div style={{color:"#fff"}}>
              <BsInstagram />
              Instagram
            </div>
            <div style={{color:"#fff"}}>
              <FiLinkedin />
              Linkedin

            </div>
          </div>



        </div>
        <div className='line m-5 m-auto mt-4 ' >

        </div>

        <div className='d-flex justify-content-between mt-4 '>
          <p style={{ marginLeft: 70 ,color:"#fff"}}>2024 Logo.All rights reserved</p>
          <p style={{ marginRight: 70,color:"#fff" }}>Privacy Notice</p>
        </div>

      </div>
    </>
  )
}

export default Footer