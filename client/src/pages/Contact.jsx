import React from 'react'
import '../style/contact.css'
 import contact3 from "../assets/images/contact3.png"
import Navb from '../components/Navb'
// import Navb from '../components/Navb'
function Contact() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb/>
      <div className='contact-container'>
        <form action="" className="contact-left rounded-2xl  bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group w-[500px] h-[500px]">

          <div className="mt-5 contact-left-title text-white">
            <h2>Get in touch</h2>
            <hr className=' bg-gradient-to-r from-primary to-secondary'/>

          </div>
          <input type="text" name='name' placeholder='Your Name' className='contact-inputs' required />
          <input type="text" name='email ' placeholder='Your Email' className='contact-inputs' required />
          <textarea name="message" placeholder='Your Message' className='contact-inputs' required  ></textarea>
          <button type='submit' className='bg-gradient-to-r from-primary to-secondary'>Send <img src="" alt="" /></button>
        </form>
        <div className="contact-right">
          <img src={contact3} alt=""  />
        </div>
        <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

      </div>


    </main>
  )
}

export default Contact


