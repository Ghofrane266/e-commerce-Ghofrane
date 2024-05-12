
import React,{useEffect} from "react";
import pr2 from "../assets/images/pr2.png";
import pr from "../assets/images/pr.png";
import pr3 from "../assets/images/pr3.png";
import '../style/product.css'

import { useDispatch, useSelector } from 'react-redux'
import Navb from "../components/Navb";
import OneProduct from "./OneProduct";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {fetchProducts} from '../store/products'

const Products = () => {

  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products,"state")
  const navigate= useNavigate()
  return (
    <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb/>
      <section  >
        <div className="container ">
          {products.map((product,index)=>
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center" key={index}>
            <div data-aos="zoom-in" className="mt-20">
              <img
                src={pr2}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
                />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 mt-10 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
                >
                product {product.id}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                {product.title}
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
               {product.description}
               <div>price :{product.price}</div>
               
              </p>
              <button
              onClick={()=>navigate(`/OneProduct/:${product.id}`)}
              // data-aos="fade-up"
              data-aos-delay="900"
              className=" bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View detaills
                
              </button>
            </div>
          </div>
              )}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
            <div className="space-y-3 xl:pr-36 p-4  mt-12 px-12">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
              >
                product 2
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Restaurant template
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
              
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View details
              </button>
            </div>
            <div data-aos="zoom-in" className="mt-20">
              <img
                src={pr}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
            <div data-aos="zoom-in" className="mt-20 mb-5">
              <img
                src={pr3}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4  mt-10 mb-5 px-11">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
              >
                product 3
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Xbeat template
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                
              </p>
              <button
                //  data-aos="fade-up"
                // data-aos-delay="900"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View details
              </button>
            </div>
          </div> */}
        </div>
      </section>
      {/* <OneProduct/> */}
    
    </div>
    
  );
};

export default Products;
