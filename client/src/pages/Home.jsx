import React, { Fragment } from 'react';

import Header from '../components/Header';
import '../style/home.css';
import Footer from '../components/Footer';




function Home() {
    return (
        <Fragment className='home'>

            <Header />
            <section className='faq'>
                <div className="container">
                    <div className="d-flex justify-content-between mt-5">
                        <div style={{ color: "#052b57" }} className='mt-5'>
                            <h3>FaQ</h3>
                            <h1>Got questions? We have answers!</h1>
                            <p>Everything you need to know about the product and Logo</p>
                            <button className=' btn btnn' style={{ width: "30%" }}>Talk with us</button>

                        </div>
                        <div >

                            <h1 style={{ color: "#052b57" }}>Frequently Asked Questions</h1>

                            <ul className="question">
                                <li><input type="radio" name="question" id="first" />
                                    <label for="first">What is Logo? </label>
                                    <div className="guess">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                                            deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                                            eveniet nostrum cum rerum similique doloremque.</p>
                                    </div>
                                </li>
                                <li><input type="radio" name="question" id="second" />
                                    <label for="second">What advantages does logo offer for you ?</label>
                                    <div className="guess">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                                            deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                                            eveniet nostrum cum rerum similique doloremque.</p>
                                    </div>
                                </li>
                                <li><input type="radio" name="question" id="third" />
                                    <label for="third">How can you join us?</label>
                                    <div className="guess">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                                            deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                                            eveniet nostrum cum rerum similique doloremque.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </section>

            <section className='mailing m-5 m-auto  mt-3' style={{ borderRadius: 50 }}>
                <div className='d-flex justify-content-center '>
                    <p style={{ color: "white", fontSize: 40, fontWeight: "bold", marginTop: 100 }}>Join Our mailing list for exclusive news and offers!</p>

                </div>
                <small className='d-flex justify-content-center ' style={{ color: "white", fontSize: 20, fontWeight: "bold", letterSpacing: "-1px", lineHeight: 1.3 }}>Stay in the loop with everything you need to know</small>
                <div className='div mt-5 d-flex justify-content-center '>
                    <input type="text" placeholder='Enter your email address' />
                    <button className=' btn btnn'>Subscribe</button>
                </div>
            </section>

            <Footer />

        </Fragment >




    )
}

export default Home;
