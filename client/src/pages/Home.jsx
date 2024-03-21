import React, { Fragment } from 'react';

import Header from '../components/Header';
import './style/home.css';

import img2 from './images/img2.webp'
import img1 from './images/img1.jpg'
import img3 from './images/img3.png.avif'
import img4 from './images/img4.png.jpg'
import img5 from './images/img5.png.avif'


function Home() {
    return (
        <Fragment>
            <Header />
            <section className='d-flex justify-content-center' >
                <div className='about'>

                </div>
            </section>
            <section className=' section2 mt-5 '>
                <div className='container'>
                    <div className="row py-5 ">
                        <div className='col-12 col-lg-7 me-auto' >

                            <h1 className='s2 m-3 '>
                                What we Offer
                            </h1>

                            <p className='m-3  ' style={{ fontSize: "24px", color: "white", fontWeight: 400 }}>Explore our website for a wide range of professionally-designed templates,
                                perfect for all your creative projects.</p>
                            <button className='btn m-3'>see more</button>
                        </div>


                        <div className="slider mt-5 me-auto">

                            <span style={{ "--i": 1 }}><img src={img1} alt="" /></span>
                            <span style={{ "--i": 2 }}><img src={img3} alt="" /></span>
                            <span style={{ "--i": 3 }}><img src={img4} alt="" /></span>
                            <span style={{ "--i": 4 }}><img src={img5} alt="" /></span>
                            <span style={{ "--i": 5 }}><img src={img5} alt="" /></span>
                            <span style={{ "--i": 6 }}><img src={img5} alt="" /></span>
                            <span style={{ "--i": 7 }}><img src={img3} alt="" /></span>
                            <span style={{ "--i": 8 }}><img src={img4} alt="" /></span>

                        </div>
                    </div>
                </div>

            </section>
            {/* <section>
                <div className="container">
                    <div className="row py-5 ">
                        <div className='col-12 col-lg-7'>
                            <h2>processus</h2>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h2>processus</h2>
                        </div>
                    </div>
                </div>
            </section> */}

        </Fragment >


    )
}

export default Home;
