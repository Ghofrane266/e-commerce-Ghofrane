import React from 'react'
import '../style/about.css'
import Footer from '../components/Footer'
import login  from '../assets/images/login.jpg'

export default function About() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ paddingTop: 120, color: "#fff" }} >
        <h1 className='d-flex justify-content-center align-items-center mb-3 mt-3'  >About Us</h1>
        <p className='d-flex justify-content-center align-items-center fs-4 '  >Empower Your Ecommerce Journey with Us</p>
      </div>
      <div style={{padding:50,color: "white", fontSize: 20, fontWeight: "400", letterSpacing: "-1px", lineHeight: 1.3}}>
        <p >
          Welcome to logo, your premier destination for SaaS solutions tailored to elevate your e-commerce venture. At logo, we understand the dynamic landscape of online retail and offer a curated selection of cutting-edge tools and platforms designed to optimize your operations and drive growth. Whether you're a budding entrepreneur or a seasoned professional, our mission is to empower you with the resources needed to thrive in the digital marketplace. With a commitment to innovation and customer satisfaction, we strive to be your trusted partner on your journey to success. Explore our comprehensive range of solutions today and revolutionize the way you do business online.
        </p>
      </div>
   <div className='d-flex justify-content-center'>
   <img src={login} alt="photo"  style={{width:"40%",height:"50%"}}/>
   </div>
   
   <section className='join  m-auto  mt-5' style={{ borderRadius: 50 }}>
                <div className='d-flex justify-content-center '>
                    <p style={{ color: "white", fontSize: 40, fontWeight: "600",marginTop:10 }}>Join Us!</p>

                </div>
                <small className='d-flex justify-content-center ' style={{ color: "white", fontSize: 20, fontWeight: "400", letterSpacing: "-1px", lineHeight: 1.3 }}>We're always looking for self-starters.If you are one,we might just click</small>
                <div className='div mt-3 d-flex justify-content-center '>
              
                    <button className=' btn btnn' style={{fontSize:20,width:"14%"}}>Join</button>
                </div>
            </section>
    <Footer/>
    </div>
  )
}
