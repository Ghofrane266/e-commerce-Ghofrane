import React from 'react'
import './home.css'
function Home() {
    return (
       <div>
         <section>
            <div className="container">
                <div className="row py-5">
                    <div className='col-12 col-lg-6'>
                        <p>
                            Discover the perfect template to showcase your brand's unique identity
                        </p>
                    </div>
                </div>

               <div className='div d-flex'>
                <input type="text" placeholder='logo@gmail.com'  />
                <button className=' btn btnn'>Get Started</button>
               </div >
            </div>
        </section>
        <section className='about'>
        <div className="container">
        <h2 className='text-center'>About Us</h2>
        <div className='row py-5  gx-5  '>
            
           

        </div>
        </div>
        </section>
       </div>
    
         
    )
}

export default Home ;
