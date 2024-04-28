import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import '../style/oneproduct.css'

function OneProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({});
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
            setState(res.data);
        } catch (error) {
            navigate("/*")
        }
    }
    return (
        
        <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb/>
      <div className="wrappers ">
        <div className="containers">
          <input type="radio" name='slide' id='c1' checked className='inputs'/>
          <label for="c1" className="cards">
            <div className="rows">
              <div className="iconss">1</div>
              <div className="description"></div>
              <h4>Slide</h4>
              {/* <p>sldknfzùlknvùlkqsn</p> */}
            </div>
          </label>

          <input type="radio" name='slide' id='c2'  className='inputs'/>
          <label for="c2" className="cards">
            <div className="rows">
              <div className="iconss">2</div>
              <div className="description"></div>
              <h4>Slide</h4>
              {/* <p>sldknfzùlknvùlkqsn</p> */}
            </div>
          </label>

          <input type="radio" name='slide' id='c3'  className='inputs'/>
          <label for="c3" className="cards">
            <div className="rows">
              <div className="iconss">3</div>
              <div className="description"></div>
              <h4>Slide</h4>
              {/* <p>sldknfzùlknvùlkqsn</p> */}
            </div>
          </label>

          <input type="radio" name='slide' id='c4'  className='inputs'/>
          <label for="c4" className="cards">
            <div className="rows">
              <div className="iconss">4</div>
              <div className="description">
                
              </div>
              <h4>Slide</h4>
             
            </div>
          </label>

          <input type="radio" name='slide' id='c5'  className='inputs'/>
          <label for="c5" className="cards">
            <div className="rows">
              <div className="iconss">5</div>
              <div className="description"></div>
              <h4>Slide</h4>
              {/* <p>sldknfzùlknvùlkqsn</p> */}
            </div>
          </label>

          




        </div>





      </div>
    </main>
    )
}

export default OneProduct
{/* <div className='d-flex justify-content-center mt-5'>
    <img src={state.url} alt="" />
</div>

<div>
    <div className='d-flex justify-content-center mt-5' >
        <h1 id="contained-modal-title-vcenter">
            <i> {state.name}</i>
        </h1>
    </div>
    <div className='d-flex justify-content-center mt-2 '>
        <p style={{ fontSize: "20px" }}>
            <strong> Description :</strong>
            <i>   {state.description} </i>
        </p>
    </div>
    <div className='d-flex justify-content-center'>
        <h4> <strong><i>Price:</i></strong>$ {state.price}</h4>
    </div>
</div> */}