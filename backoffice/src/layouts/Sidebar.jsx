import React from 'react'
import { IoMdClose } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineAnalytics } from "react-icons/md";
import './sidebar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


export default function Sidebar({ setIsOpen }) {
  const navigate = useNavigate()
  return (
    <div className='Side' style={{ zIndex: 5, position: 'fixed', height: '100%', width: 300, backgroundColor: "#068DA9" }}>
      <div className='d-flex justify-content-between' >
        {<div className='m-3 mt-3' style={{ color: "white" }}><strong><i>My Beauty</i></strong></div>}
        {<div ><IoMdClose onClick={() => setIsOpen(false)} className='m-3' size={25} style={{ color: "white" }} /></div>}
      </div>
      <div className='Menu'>

        <div className='MenuItem' >
          <LuHome size={25} />
          <span onClick={() => navigate("/")}>Dashboard</span>
        </div>
        <div className='MenuItem'>
          <LuClipboardList size={25} />
          <span >Orders</span>
        </div>
        <div className='MenuItem' >
          <IoPersonOutline size={25} />
          <span onClick={() => navigate("profile")}>Users</span>
        </div>
        <div className='MenuItem' >
          <LiaClipboardListSolid size={25} />


          <span>
            <NavDropdown title="Products" id="navbarScrollingDropdown" >
              <NavDropdown.Item onClick={() => navigate("products/")}>  Product list</NavDropdown.Item>

              <NavDropdown.Item onClick={() => navigate("products/add")}>  add Product</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("products/:id")}>
                Product detaills
              </NavDropdown.Item>

            </NavDropdown>
          </span>
        </div>
        <div className='MenuItem'>
          <MdOutlineAnalytics size={25} />
          <span>
            Analytics</span>

        </div>

      </div>

    </div>
  )
}
