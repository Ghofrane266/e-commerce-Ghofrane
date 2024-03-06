import React from 'react'
import { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { UserContext } from '../router/Router';
import './navbar.css';
import { MdOutlineNotificationAdd } from "react-icons/md";

export default function Navbar({ isOpen, setIsOpen }) {
    const { user } = useContext(UserContext);
    return (
        <div>
            <div className={` text-white d-flex ${isOpen ? "justify-content-end" : "justify-content-between"} align-items-center`}
                style={{
                    backgroundColor: "transparent", position: 'fixed', paddingLeft: isOpen ? 300 : 0, width: "100%", height: 70
                }}>

                <div>
                    {isOpen !== true && (<FaBars onClick={() => setIsOpen(true)} style={{color:"#068DA9"}} className='m-3' size={25}/>
                    )}
                </div>
                <div className='Search m-5'>
                    <input type='search' placeholder='search' />
                    <MdOutlineNotificationAdd className='m-3' size={30} style={{ color: '#068DA9' }} />
                </div>
                <div className="d-flex align-items-center gap-1">
                    <p className="m-0 " style={{ color: "#068DA9" }}><i>Welcome {user.userName}</i></p>
                    <img src={user.imageUrl} alt="emilyphoto" className='rounded-circle  m-2 ' style={{ width: 60, height: 60, objectFit: "cover" }} />
                </div>
            </div>
        </div>
    )
}

