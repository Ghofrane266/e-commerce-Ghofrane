import React from 'react'
import "./header.css"
import dah from "../pages/images/dah.jpg"
function Header() {
    return (



        <section  >
            <div className='container'>

                <div className='row py-5 ' >
                    <div className=' col-12 col-lg-5 ' style={{ marginTop: 150 }}>
                        <p className='ppp' >
                            Discover the perfect template to showcase your brand's unique identity
                        </p>
                        <p style={{color:"white", fontSize:20,fontWeight:600}}>Explore our website for a wide range of professionally-designed templates, perfect for all your creative projects!</p>


                        <div className='div mt-5'>
                            <input type="text" placeholder='logo@gmail.com' />
                            <button className=' btn btnn'>Get Started</button>
                        </div>
                    </div >
                    <div className='col-12 col-lg-4 px-5 mx-4' style={{ marginTop: 100 }}>
                        <img src={dah} alt="" style={{ width: "80vh", height: "60vh" }} />
                       
                    </div>

                </div>
            </div>
        </section>



    )
}

export default Header