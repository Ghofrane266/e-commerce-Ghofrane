import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../apps/App';
import Home from '../pages/Home'
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Product from '../pages/Products';
import { getMe } from '../store/auth';
import Auth from '../apps/Auth';
import Signup from '../pages/Signup';
import Pricing from '../pages/Pricing';

function Router() {
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) dispatch(getMe());
  }, [dispatch]);
  return (
    <BrowserRouter>

      <Routes>
        {/* {user ? */}
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path="template" element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='auth' element={<Auth />}>
            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Route>

        {/* : ( */}
        {/* <Route path='/' element={<Auth />}>
              <Route index element={<Login />} />
              <Route path='signup' element={<Signup />} /> */}



        {/* </Route> */}
        {/* )} */}

      </Routes>


    </BrowserRouter>

  )
}



export default Router