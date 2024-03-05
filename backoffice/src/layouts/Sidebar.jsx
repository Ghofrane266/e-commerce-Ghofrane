import React from 'react'
import { IoMdClose } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineAnalytics } from "react-icons/md";
import './sidebar.css';

import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Sidebar({ setIsOpen }) {
  return (
    <div className='Side' style={{ zIndex: 5, position: 'fixed', height: '100%', width: 300, backgroundColor: "#068DA9" }}>
      <div className='d-flex justify-content-between' >
        {<div className='m-3 mt-3' style={{ color: "white" }}><strong><i>My Beauty</i></strong></div>}
        {<div ><IoMdClose onClick={() => setIsOpen(false)} className='m-3' size={25} style={{ color: "white" }} /></div>}
      </div>
      <div className='Menu'>

        <div className='MenuItem' >
          <div > <LuHome /></div>
          <span>Dashboard</span>
        </div>
        <div className='MenuItem'>
          <div> <LuClipboardList /></div>
          <span>Orders</span>
        </div>
        <div className='MenuItem' >
          <div> <IoPersonOutline /></div>
          <span>Custtomers</span>
        </div>
        <div className='MenuItem' >
          <div><LiaClipboardListSolid /></div>


          <span>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">  add Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Product detaills
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Product
              </NavDropdown.Item>
              </NavDropdown>
          </span>
        </div>
        <div className='MenuItem'>
          <div><MdOutlineAnalytics /></div>
          <span>
            Analytics</span>

        </div>

      </div>

    </div>
  )
}
