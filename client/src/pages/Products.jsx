
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
import { fetchProducts } from '../store/products'
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";




const Products = ({ searchTerm, setSearchTerm }) => {

  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  const { addItem, items } = useCart();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products, "state")

  const addToCart = (product) => {
    const item = items.filter((e, i) => e.id === product.id)
    if (item.length === 0) {
      addItem(product)
    }
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-s">
        <div className="text-start mt-10 max-w-[400px] mx-10 " >
          <h1 className="text-4xl font-serif ">Our Products : </h1>
        </div>
        <div className="relative m-3 flex flex-wrap mx-auto justify-center ">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="min-w-[340px] flex flex-col group m-3">
                <div className="h-48 md:h-56 lg:h-[24rem] w-full  border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                  <img
                    src={product.Images[0].url}
                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                    alt={product.Images[0].alt}

                  />
                  <div className="absolute z-10 border-4  w-[95%] h-[95%] invisible group-hover:visible opacity-0 bg-transparent group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                </div>
                <p style={{ fontWeight: 'bold' }} className="block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1 font-serif">
                  {product.title}   ${product.price}
                </p>
                {/* <p className="mb-4 font-light text-sm md:text-sm text-center text-gray-400">
                  {product.description}
                </p> */}
                <div className="flex justify-center gap-x-3 mt-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="px-5 py-2 border border-primary text-primary hover:bg-primary transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
                  >
                    Add
                  </button>
                  <a
                    onClick={() => navigate(`/Oneproduct/${product.id}`)}
                    className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold cursor-pointer"
                  >
                    View
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
