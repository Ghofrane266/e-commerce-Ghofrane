
import React from "react";
import logo from "../assets/images/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { FaCartShopping } from "react-icons/fa6";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "#",
  },
  {
    id: 3,
    name: "Pricing",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];
const Navb = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-2">
            <img src={logo}  alt="" className="h-16" />
            <p className="text-3xl">
              SaaS <span className="font-bold">e-commerce</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block ">
            <ul className="flex items-center gap-8 ">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <button
                   onClick={() => handleOrderPopup()}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                >
                  Order
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
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
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navb;












// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import Offcanv from './Offcanv';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import { IoMdLogIn } from "react-icons/io";
// import './nav.css'


// export default function Navb(props) {
//     const [show, setshow] = useState(false);
//     const handleClose = () => setshow(false);
//     // const handleShow = () => setshow(true);
//     console.log(props);

  
//     return (
        
//         <Navbar expand="lg" className="nav"  list={props.itemList}  addcart={props.addToCart}  changeValue={props.changeValue} changeitem={props.removeFromCart}  >
//             <Container fluid>
//                 <Navbar.Brand href="#"  className='fs-4 fw-bold textp'><i>logo</i></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll"  style={{color:"white"}}/>
//                 <Navbar.Collapse id="navbarScroll" style={{color:"white"}} >
//                 {/* <Form >
//                         {/* <FaCartPlus className='mx-3' size={40} onClick={handleShow} /> */}
// {/*                      
//                         <Form.Control
                     
//                             type="search"
//                              placeholder= "Search"
//                             className=" ms-4 "
//                             // aria-label="Search"
//                             onChange={(e)=>props.changeValue(e)}
//                         /> */}
                     
//                     {/* </Form> */} 
//                     <Nav
//                         className="ms-auto my-2 m-5"
//                         style={{ maxHeight: '100px' }}
//                         navbarScroll
//                     >
                        
//                         <Nav.Link to="/" as={NavLink} className='link' style={{color:"white",fontSize:"18px",fontWeight:500,marginRight:'24px'}}  >Home</Nav.Link>
                        
//                         <Nav.Link to="/about" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >About</Nav.Link>
//                         {/* <Nav.Link to="/template" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >template</Nav.Link> */}
//                         <Nav.Link to="/pricing" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Pricing</Nav.Link>
//                         <Nav.Link to="/blog" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Blog</Nav.Link>
                          
//                         <Nav.Link to="/auth" as={NavLink} className='link' style={{color:"white",marginRight:'24px'}} ><IoMdLogIn size={25}/></Nav.Link>
                        
//                     </Nav>

                   
//                 </Navbar.Collapse>
//             </Container>
//             <Offcanv show={show} onHide={handleClose} items={props.itemList}  removeitems={props.removeFromCart} />
//         </Navbar>

//     );

// }
