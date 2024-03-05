
 import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='App'>
<div className='Glass'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}>
        <Outlet />
      </div>
      {/* <Footer isOpen={isOpen} /> */}
</div>

    </div>
  )
}

export default App;

