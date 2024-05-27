// import React, { useState } from 'react';
// import DarkMode from './DarkMode';
// import { useDispatch } from 'react-redux';
// import { logout } from '../store/auth';
// import { FaRegUser } from 'react-icons/fa6';

// function DropDown() {
//   const [isOpen, setIsOpen] = useState(false);
// const dispatch=useDispatch()
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button
//         id="dropdownDelayButton"
//         data-dropdown-toggle="dropdownDelay"
//         data-dropdown-delay="500"
//         data-dropdown-trigger="hover"
//         className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//         onClick={toggleDropdown}
//       >
//                 <FaRegUser
//                 className="hover:text-primary"
//                 // onClick={() => setShowLogin(true)}
//                 size={20}
//                 style={{ cursor: "pointer" }}
//               />

//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       {/* Dropdown menu */}
//       {isOpen && (
//         <div
//           id="dropdownDelay"
//           className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//         >
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
//             <li>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//               <DarkMode />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch(logout())}>
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropDown;
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const DropDown = () => {
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Fermer le popup de connexion
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="dropdown-toggle py-2   flex items-center gap-2 rounded"
      >
        {/* <span className="pointer-events-none">Services</span> */}
        <FaRegUser
                className="hover:text-primary"
                
                size={20}
                style={{ cursor: "pointer" }}
              />
       
          <title>chevron-down</title>
          <g fill="none">
            <path
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        {/* </svg> */}
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute bg-white text-black rounded-b-lg pb-2 w-32">
          <p  className="block px-6 py-2 hover:bg-gray-300" onClick={() => setShowLogin(true)}>
            Login
          </p>
          <p  className="block px-6 py-2 hover:bg-gray-300" onClick={() => setShowSignup(true)}>
            SignUp
          </p>
          <a  className="block px-6 py-2 hover:bg-gray-300">
          <IoLogOutOutline color="black" className="hover:text-primary" size={20} style={{ cursor: "pointer" }} onClick={() => dispatch(logout())} />
            
          </a>
          <a  className="block px-6 py-2 hover:bg-gray-300">
          <DarkMode  />
          </a>
        </div>
      )}
       {showLogin && (
        <Login openSignup={openSignup} onClose={() => setShowLogin(false)} />
      )}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default DropDown;

