
import React, { useEffect, useState } from "react";
import pr2 from "../assets/images/pr2.png";
import pr from "../assets/images/pr.png";
import pr3 from "../assets/images/pr3.png";
import '../style/product.css'

import { useDispatch, useSelector } from 'react-redux'
import Navb from "../components/Navb";
import OneProduct from "./OneProduct";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {  fetchProducts } from '../store/products'
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";



const Products = () => {
  const { addItem, items } = useCart();
//   const addToCart = () => {
//     const item = items.filter((e, i) => e.id === products.items.id )
//     if (item.length === 0) {
//         addItem(products.items)}
// }

  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products, "state")
  const navigate = useNavigate()
 

  return (
    <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb />

       
        <h1 className="text-4xl font-bold flex items-center justify-center mt-10  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:text-white ">Our Products :</h1>
      <div className="flex min-h-[100vh] items-center justify-center mt-10 ">
        <div className="  grid grid-cols-2 gap-12 md:grid-cols-1 lg:grid-cols-2  ">
          {products.map((product,index)=>
          <div className="mb-20  w-full rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-cyan-500/50" key={index}>
            <div className=" max-w-lg  ">
              <img className="h-full  w-full object-cover transition-transform duration-500 group-hover:scale-125" src={product.Images[0].url} alt={product.Images[0].alt} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-xl font-bold  text-white ">{product.title}</h1>
              <p className="mb-5 text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">${product.price}</p>
              <IoCartOutline size={30} color="white" className="mb-5" />
              <button className="rounded-full bg-gradient-to-r from-primary to-secondary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"  onClick={()=>navigate(`/OneProduct/${product.id}`)}>See More</button>
            </div>
            <div className=" flex  flex-col items-center justify-center px-4 text-center  ">

            {/* <h1 className="font-dmserif text-xl font-bold  text-white mt-10">{product.title}</h1> */}
            </div>
            
          </div>
          
        )}
        </div>
      </div>
      {/* <div className="h-[100px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div> */}
    
    </div>

  );
};

export default Products;
