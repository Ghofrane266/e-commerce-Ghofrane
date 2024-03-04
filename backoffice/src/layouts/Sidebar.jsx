import React from 'react'
import { IoMdClose } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineAnalytics } from "react-icons/md";
export default function Sidebar({ setIsOpen }) {
  return (
    <div style={{ backgroundColor: "#C4DFDF", zIndex: 5, position: 'fixed', height: "100%", width: 300 }}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div><strong><i>My Beauty</i></strong></div>
        <div><button className='btn btn-light' onClick={() => setIsOpen(false)}><IoMdClose /></button></div>
      </div>
      <div className='d-flex  flex-column' style={{marginTop:50,paddingLeft:30 }} >
        
          <div > <LuHome style={{marginRight:10}}/>Dashboard</div>
          <div> <LuClipboardList style={{marginRight:10}}/>Orders</div>
          <div> <IoPersonOutline style={{marginRight:10}}/>Custtomers</div>
          <div><LiaClipboardListSolid style={{marginRight:10}}/>Products</div>
          <div><MdOutlineAnalytics style={{marginRight:10}}/>Analytics</div>
        
      </div>

    </div>
  )
}
