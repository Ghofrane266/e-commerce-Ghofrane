import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../apps/App';
import AOS from "aos";
import "aos/dist/aos.css";


import Pricing from '../pages/Pricing';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Auth from '../apps/Auth';
import OneProduct from '../pages/OneProduct';
import Cart from '../pages/Cart/Cart';
function Router() {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<App />} />




        <Route path='/products' element={<Products />} />
        <Route path='/OneProduct/:id' element={<OneProduct />} />

        <Route path='pricing' element={<Pricing togglePlay={togglePlay} />} />



        <Route path='contact' element={<Contact />} />
        <Route path='auth' element={<Auth />} >

          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />

        </Route>

          <Route path='/order' element={<Cart />} />









      </Routes>


    </BrowserRouter>

  )
}



export default Router