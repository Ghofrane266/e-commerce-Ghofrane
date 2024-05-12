import React, { useEffect, useState } from 'react'
import Navb from '../components/Navb'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import '../style/oneproduct.css'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProduct} from '../store/products'



function OneProduct() {
    const { id } = useParams();
    const OneProduct = useSelector((state) => state.products.product)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProduct(id))
    }, [dispatch])
    console.log(OneProduct,"state")
  
    return (

        <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
            <Navb />
            <div className="carousel">

                <div>
                    <div className="carousel-content">
                        <span>discover</span>
                        <h1>image slider</h1>
                        <hr />
                        <a href="" className='slider-btn  bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3'>Order Now</a>
                    </div>
                </div>
                <Swiper 
                loop={false}
                className='myswiper'
                    modules={[Pagination, EffectCoverflow, Autoplay]} effect={"coverflow"} grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true

                    }}  pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 2
                        },
                        1560: {
                            slidesPerView: 3
                        },
                    }}>
                     {OneProduct && OneProduct.images && Array.isArray(OneProduct.images) && OneProduct.images.map((data, index) => (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${data.url})` }} className='myswiper-slider'>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
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