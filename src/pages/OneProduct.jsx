import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function OneProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({});
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
            setState(res.data);
        } catch (error) {
            navigate("/*")
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
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
            </div>
        </div>
    )
}

export default OneProduct