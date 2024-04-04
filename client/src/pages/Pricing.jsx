import React from 'react'
import '../style/pricing.css'
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div style={{ height: '100%' }} >
      <div style={{ paddingTop: 100, color: "#fff" }} >
        <h1 className='d-flex justify-content-center align-items-center '  >Pay only for what you need</h1>
        <p className='d-flex justify-content-center align-items-center fs-4 '  >Join dozens of high-growth startups</p>
      </div>
      <div className='d-flex justify-content-evenly px-5 mx-5 py-5'>
        <div>
          <Card style={{ width: '18rem', height: '28rem' }}>
            <Card.Body>
              <Card.Title className='px-5 mx-4' style={{ fontWeight: "bold", fontSize: 24 }}>Free plan</Card.Title>
              <Card.Subtitle className="mb-2 mt-4" style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>$0</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className='btn btnn mx-5' style={{ width: "50%" }}>Get Started</button>

            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem', height: '28rem' }}>
            <Card.Body>
              <Card.Title className='px-4 mx-4' style={{ fontWeight: "bold", fontSize: 24 }}>Advanced</Card.Title>
              <Card.Subtitle className="mb-2 mt-4" style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>$200</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className='btn btnn mx-5' style={{ width: "50%" }}>Get Started</button>

            </Card.Body>
          </Card>
        </div>
        <div className='card'>
          <Card style={{ width: '18rem', height: '28rem' }}>
            <Card.Body>
              <Card.Title className='px-5 mx-4' style={{ fontWeight: "bold", fontSize: 24 }}>Premium</Card.Title>
              <Card.Subtitle className="mb-2 mt-4" style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>$100</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className='btn btnn mx-5' style={{ width: "50%" }}>Get Started</button>

            </Card.Body>
          </Card></div>
      </div>
      <div>
        <h2 className='d-flex justify-content-center' style={{ color: "#fff", fontSize: 40 }}>F.A.Q</h2>
        <div className='mt-4'  style={{paddingLeft:480}}>
          <ul className="question">
            <li><input type="radio" name="question" id="first" />
              <label for="first">What is Advanced Plan? </label>
              <div className="guess">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                  deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                  eveniet nostrum cum rerum similique doloremque.</p>
              </div>
            </li>
            <li><input type="radio" name="question" id="second" />
              <label for="second">What is Premium Plan ?</label>
              <div className="guess">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                  deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                  eveniet nostrum cum rerum similique doloremque.</p>
              </div>
            </li>
            <li><input type="radio" name="question" id="third" />
              <label for="third">What about my privacy?</label>
              <div className="guess">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis quo expedita nemo
                  deleniti tenetur aperiam sit, similique corrupti. Excepturi modi perferendis in veritatis
                  eveniet nostrum cum rerum similique doloremque.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
