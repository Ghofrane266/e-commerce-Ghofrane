
 import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='App'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}>
        <Outlet />
      </div>
      <Footer isOpen={isOpen} />

    </div>
  )
}

export default App;

