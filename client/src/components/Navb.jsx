
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { useCart } from "react-use-cart";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Navb = () => {
  const {
    isEmpty,
    totalItems,
} = useCart();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Fermer le popup de connexion
  };

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className=" py-2 md:py-0 shadow-xl dark:shadow-2xl dark:shadow-white/10">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-2 px-5">
            <img src={logo} alt="" className="h-16" />
            <p className="text-3xl">
              SaaS <span className="font-bold">e-commerce</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 px-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      onClick={() => navigate(`${link}`)}
                      className="text-xl font-semibold hover:text-primary py-2 transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <FaRegUser
              className="hover:text-primary"
                onClick={() => setShowLogin(true)}
                size={20}
                style={{ cursor: "pointer" }}
              />
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white rounded-full flex items-center gap-3 relative inline-flex  p-2  text-center text-white bg-blue-700 rounded-lg  "
                onClick={() => navigate("/order")}
              >

                Order
                <FaCartShopping size={25} className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 p-3" >{totalItems} </span> 

              </button>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden block absolute top-0 left-0 w-full  bg-white dark:bg-gray-800 z-[9998]">
          <FaTimes className="absolute top-5 right-6 text-black dark:text-white cursor-pointer" size={22} onClose={() => setShowMenu(false)} onClick={toggleMenu} />

          <ul className="flex flex-col items-center gap-4 pt-10 mb-4">
            {NavLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <a
                    onClick={() => {
                      navigate(`${link}`);
                      toggleMenu(); // Ferme le menu après la navigation
                    }}
                    className="text-xl font-semibold hover:text-primary py-2"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
            <li>
              <FaRegUser
                onClick={() => {
                  setShowLogin(true);
                  toggleMenu();
                }}
                size={20}
                style={{ cursor: "pointer" }}
              />
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                onClick={() => {
                  navigate("/order");
                  toggleMenu();
                }}
              >
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
      )}
      {showLogin && (
        <Login openSignup={openSignup} onClose={() => setShowLogin(false)} />
      )}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Navb;

