import React from 'react'
import "../style/checkout.css"
import imgcards from "../assets/images/imgcards.png"
export default function Checkout() {
  return (
    <>
    
    <div className="contain">
        <form action="" className='for'>
            <div className="row">
                <div className="column">
                    <h3 className='titre'>Billing Address</h3>
                    <div className="inputbox">
                        <span>Full Name :</span>
                        <input type="text"  placeholder='Enter Your Name'/>
                    </div>
                    <div className="inputbox">
                        <span>Email :</span>
                        <input type="email"  placeholder='Enter Your Email'/>
                    </div>
                    <div className="inputbox">
                        <span>Phone :</span>
                        <input type="text"  placeholder='Phone'/>
                    </div>
                    <div className="inputbox">
                        <span>Address :</span>
                        <input type="text"  placeholder='Address'/>
                    </div>
                    <div className="flexx">
                    <div className="inputbox">
                        <span>State :</span>
                        <input type="text"  placeholder='state'/>
                    </div>
                    <div className="inputbox">
                        <span>Zip Code :</span>
                        <input type="number"  placeholder='Zip Code'/>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <h3 className='titre'>Payment</h3>
                    <div className="inputbox">
                        <span>Cards Accepted :</span>
                        <img src={imgcards}/>
                    </div>
                    <div className="inputbox">
                        <span>Name on Card :</span>
                        <input type="text"  placeholder='Name on Card'/>
                    </div>
                    <div className="inputbox">
                        <span>Credit Card Number :</span>
                        <input type="number"  placeholder='1111 2222 3333 4444'/>
                    </div>
                    <div className="inputbox">
                        <span>Exp. Month :</span>
                        <input type="text"  placeholder=' Month'/>
                    </div>
                    <div className="flexx">
                    <div className="inputbox">
                        <span>Exp. Year:</span>
                        <input type="number"  placeholder='Year'/>
                    </div>
                    <div className="inputbox">
                        <span>CVV :</span>
                        <input type="number"  placeholder='CVV'/>
                    </div>
                    </div>
                </div>
            </div>
            <button type='submit' className='bton'>Submit</button>
        </form>
    </div>
    
    
    
    
    </>
  )
}
