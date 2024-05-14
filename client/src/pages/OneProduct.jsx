import React, { useEffect, useState } from 'react'
import Navb from '../components/Navb'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../store/products'

import '../style/oneproduct.css'

function OneProduct() {
    const { id } = useParams();
    const oneProduct = useSelector((state) => state.products.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch])
    console.log(OneProduct, "state")
    console.log("OneProduct:", OneProduct);
    console.log("Images:", OneProduct && OneProduct.Images);

    return (

        <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
            <Navb />
           <section className="product-details">
              <div className="product-page-img">
                {oneProduct && oneProduct.Images.map((image, index) => 
                <div key={index} className="mySlides">
                 <div className="numbertext">{index + 1} / {oneProduct.Images.length} </div>
                 <img src={image.url} alt={image.alt} />
                 </div>   
                )}
                <a href="#!" className='prev'>&#10094;</a>
                <a href="#!" className='next'>&#10095;</a>
                <div className="slider-img">
                    {
                        oneProduct && oneProduct.Images.map((image, index) =>
                            <div key={index} className="slider-box">
                                <img src={image.url} alt={image.alt} />
                            </div>
                    )}
                </div>
              </div>
            
              {/* {oneProduct.map((product, index) =>
              <div key={index} className="product-page-details">
                <strong>{product.title}</strong>
                <p className='product-category'>Description : {product.description}</p>
                <p className='procuct-price'>Price : ${product.price}</p>
                <div className="cart-btns">
                    <a href="#!" className="add-cart">Add to Cart</a>
                    <a href="#!" className="add-cart buy-now">Buy Now</a>
                </div>
              </div>
                )} */}
           </section>
           <section className="product-all-info">

           </section>
           
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

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