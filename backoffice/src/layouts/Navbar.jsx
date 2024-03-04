import React from 'react'
import { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { UserContext } from '../router/Router';

export default function Navbar({ isOpen, setIsOpen }) {
    const { user } = useContext(UserContext);
    return (
        <div className={`text-white d-flex ${isOpen ? "justify-content-end" : "justify-content-between"} align-items-center`}
            style={{
                backgroundColor: "#E8E8E8", position: 'fixed', width: "100%", paddingLeft: isOpen ? 300 : 0, height: 70
            }}>

            <div>
                {isOpen !== true && (
                    <button className="btn btn-light" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </button>)}
            </div>
            <div className="d-flex align-items-center gap-1">
                <p className="m-0 text-black"><i>Welcome {user.userName}</i></p>
                <img src={user.imageUrl} alt="emilyphoto" className='rounded-circle  m-2 ' style={{ width: 60, height: 60, objectFit: "cover" }} />
            </div>
        </div>
    )
}

