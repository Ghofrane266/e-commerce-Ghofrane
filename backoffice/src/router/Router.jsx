import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import App from '../apps/App'
import Auth from '../apps/Auth'

import NotFound from '../pages/NotFound'

import Profile from '../pages/profile/Profile'
import ProfileDetaills from '../pages/profile/views/ProfileDetaills'
import EditProfile from '../pages/profile/views/EditProfile'
import SignOut from '../pages/auth/SignOut'
import Login from '../pages/auth/Login'
import { getMe } from '../store/auth'
import Ecommerce from '../pages/Ecommerce';
import Editor from '../pages/Editor';
import Customers from '../pages/Customers';
import Employees from '../pages/Employees';
import Orders from '../pages/Orders';
import Kanban from '../pages/Kanban';
import Calendar from '../pages/Calendar';
import ColorPicker from '../pages/ColorPicker';
import Line from '../pages/Charts/Line';
import Area from '../pages/Charts/Area';
import Bar from '../pages/Charts/Bar';
import Pie from '../pages/Charts/Pie';
import Financial from '../pages/Charts/Financial';
import ColorMapping from '../pages/Charts/ColorMapping';
import Pyramid from '../pages/Charts/Pyramid';
import Stacked from '../pages/Charts/Stacked';
import Product from '../pages/products/Product'
import ProductList from '../pages/products/views/ProductList'
import AddProduct from '../pages/products/views/AddProduct'
import ProductDetaills from '../pages/products/views/ProductDetaills'







export default function Router() {

    const user = useSelector((store) => store.auth.me);

    const dispatch = useDispatch();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) dispatch(getMe());
    }, [dispatch]);

    return (


        <BrowserRouter>
            <div>

                <Routes>
                    {user ? (
                        
                        <Route path='/' element={<App />}>
                            <Route path="*" element={<NotFound />} />
                            
                            {/* dashboard  */} 

                            <Route path="/ecommerce" element={(<Ecommerce />)} />
                            {/* pages  */}
                            <Route path='/products' element={<Product />} >
                                <Route index element={<ProductList />} />
                                <Route path='add' element={<AddProduct />} />
                                <Route path='detaills' element={<ProductDetaills />} />
                            </Route>
                            <Route path="orders" element={<Orders />} />
                            <Route path="employees" element={<Employees />} />
                            <Route path="customers" element={<Customers />} />
                            <Route path='profile' element={<Profile />} >
                                <Route index element={<ProfileDetaills />} />
                                <Route path='edit' element={<EditProfile />} />

                            </Route>

                            {/* apps  */}
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/color-picker" element={<ColorPicker />} />

                            {/* charts  */}
                            <Route path="/line" element={<Line />} />
                            <Route path="/area" element={<Area />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/financial" element={<Financial />} />
                            <Route path="/color-mapping" element={<ColorMapping />} />
                            <Route path="/pyramid" element={<Pyramid />} />
                            <Route path="/stacked" element={<Stacked />} />
                        </Route>
                    ) : (
                        <Route path="/" element={<Auth />} >
                            <Route index element={<Login />} />
                            <Route path='register' element={<SignOut />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    )}

                    
                </Routes>

            </div>
        </BrowserRouter>

    )
}
