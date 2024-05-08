import React, { useState } from "react";
import saas from "../assets/images/saas.png";
import { BiPlayCircle } from "react-icons/bi";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Header = ({ togglePlay }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Fermer le popup de connexion
  };
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
              Welcome to SaaS e-commerce {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                your premier destination for SaaS solutions tailored to elevate your e-commerce venture
                </span>
              </h1>
              {/* <p data-aos="fade-up" data-aos-delay="300">
              Explore our website for a wide range of professionally-designed templates.
              </p> */}
              <div className="flex gap-6">
                <button
                    onClick={() => setShowLogin(true)}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={saas} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
        {showLogin && <Login openSignup={openSignup} onClose={()=>setShowLogin(false)}/>}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      </div>
    </>
  );
};

export default Header;