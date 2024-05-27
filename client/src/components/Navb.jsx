
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
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";
import { IoSearchOutline } from "react-icons/io5"
import '../style/searchbar.css'
import DropDown from "./DropDown";
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

const Navb = ({ searchTerm, setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
    navigate('/products');
  };
  const {
    isEmpty,
    totalItems,
  } = useCart();

  const handleChange = (e) => {

    setLocalSearchTerm(e.target.value);

  };
  const dispatch = useDispatch();

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
            <ul className="flex items-center gap-4 px-8">

              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      onClick={() => navigate(`${link}`)}
                      className="cursor-pointer  text-xl font-semibold hover:text-primary py-2 transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
             

              <ul><DropDown /></ul>
              {/* Search bar */}
              <ul>
                <form onSubmit={handleSearchSubmit} className="boxx mt-1">
                  <input type="text" placeholder="Search..." value={localSearchTerm}
                    onChange={handleChange} />
                  <button type="submit"><IoSearchOutline color="black" /></button>
                </form>
              </ul>
              <button
                className=" hover:scale-105 duration-200 text-white rounded-full flex items-center gap-3 relative inline-flex  p-2  text-center text-white rounded-lg  "
                onClick={() => navigate("/order")}
              >


                <FaCartShopping size={25} className="text-xl drop-shadow-sm cursor-pointer text-black dark:text-white mt-1" />
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 p-3 mt-1" >{totalItems} </span>

              </button>

            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4 mx-2">
            
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
              <DropDown />
            </li>
            
              {/* Search bar */}
              <form onSubmit={handleSearchSubmit} className="boxx mt-1">
                <input type="text" placeholder="Search..." value={localSearchTerm}
                  onChange={handleChange} />
                <button type="submit"><IoSearchOutline color="black" /></button>
              </form>
            
            <li>
              <button
                className=" hover:scale-105 duration-200 text-white rounded-full flex items-center gap-3 relative inline-flex  p-2  text-center text-white rounded-lg  "
                onClick={() => navigate("/order")}
              >


                <FaCartShopping size={25} className="text-xl drop-shadow-sm cursor-pointer text-black dark:text-white mt-1" />
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 p-3 mt-1" >{totalItems} </span>

              </button>
            </li>
           
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navb;

