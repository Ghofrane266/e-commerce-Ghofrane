import React, { useState } from "react";
import pr from "../assets/images/pr.png";
import pr2 from "../assets/images/pr2.png";
import pr3 from "../assets/images/pr3.png";
import { FaStar } from "react-icons/fa";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: pr3,
    title: "XBeat template",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price:"£150",
      link:"#"
  },
  {
    id: 2,
    img: pr,
    title: "Restaurant template",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price:"£100",
      link:"#"
  },
  {
    id: 3,
    img: pr2,
    title: "Coffee shop template",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price:"£120",
      link:"#"
  },
];

const Services = ({ handleOrderPopup }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Fermer le popup de connexion
  };
  const navigate=useNavigate()
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* <div className="text-center mb-20 max-w-[400px] mx-auto"> */}
            {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Products
            </p> */}
           <div className="text-center mb-20 max-w-[400px] mx-auto ">
           <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Top Products</h1>
           </div>
            {/* <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p> */}
          {/* </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl  bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[180px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md  h-[150px]"
                  />
                </div>
                <div className="p-4 text-center">
                  {/* <div className="w-full flex items-center justify-center gap-2 mb-3">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div> */}
                  <h1 className="text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:text-white">{service.title}</h1>
                  <p className="mb-3 text-white group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                     
                  </p>
                  <a
                  href={service.link}
                  className="inline-block  font-semibold mb-1 text-primary group-hover:text-white duration-300" onClick={()=>{navigate('products')}}
                >
                  Learn More
                </a>
                  <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:text-white" >{service.price}</h2>
                 
                  <button
                    className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-white"
                    onClick={() => setShowLogin(true)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showLogin && <Login openSignup={openSignup} onClose={()=>setShowLogin(false)}/>}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      </div>
    </>
  );
};

export default Services;