import React from 'react'

import { FaBars } from "react-icons/fa";

import './navbar.css';
import { MdOutlineNotificationAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
import {  useSelector } from 'react-redux';


export default function Navbar({ isOpen, setIsOpen }) {
    const user=useSelector(store=>store.auth.me)
    return (

        <div className={`Navb text-white d-flex ${isOpen ? "justify-content-end" : "justify-content-between"} align-items-center`}
            style={{
                backgroundColor: "transparent", position: 'fixed', paddingLeft: isOpen ? 300 : 0, width: "100%", height: 70,

            }}>

            <div>
                {isOpen !== true && (<FaBars onClick={() => setIsOpen(true)} style={{ color: "#068DA9" }} className='m-3' size={25} />
                )}
            </div>
            <div className="Icon d-flex align-items-center gap-1">
                <div className='Search m-5'>
                    <i> <IoSearch /></i>
                    <input type='text' placeholder='search' />

                </div>
                <i> <LuMessageSquarePlus className='mt-1' size={28} style={{ color: '#068DA9' }} /></i>
                <i><MdOutlineNotificationAdd className='m-3' size={30} style={{ color: '#068DA9' }} /></i>
                <p className="m-0 " style={{ color: "#068DA9" }}><i>Welcome {user.fullName}</i></p>
                <img src={user.avatarUrl} alt="userphoto" className='rounded-circle  m-2 ' style={{ width: 60, height: 60, objectFit: "cover" }} />
            </div>
        </div>

    )
}

