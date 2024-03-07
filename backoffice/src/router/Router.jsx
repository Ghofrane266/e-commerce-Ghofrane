import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Dashboard from '../pages/Dashboard'
import App from '../apps/App'
import Auth from '../apps/Auth'
import Product from '../pages/products/Product'
import NotFound from '../pages/NotFound'
import AddProduct from '../pages/products/views/AddProduct'
import ProductList from '../pages/products/views/ProductList'
import ProductDetaills from '../pages/products/views/ProductDetaills'
import Profile from '../pages/profile/Profile'
import ProfileDetaills from '../pages/profile/views/ProfileDetaills'
import EditProfile from '../pages/profile/views/EditProfile'
export const UserContext = createContext();

export default function Router() {
    const [user, setUser] = useState({
        id: 1,
        userName: "Emily",
        userLastName:"jhon",
        Age: 24,
        imageUrl: "https://pxbar.com/wp-content/uploads/2023/09/dp-images-for-girls-cartoon-1-1024x1024.jpg",
        Email:"ghoficherni@gmail.com",
        job:"web developper",
        phone:53624895

    });
    return (
        <Provider store={store} > 

        <BrowserRouter>
          <UserContext.Provider value={{user,setUser}}>
            <Routes>
                {user ? (
                    <Route path='/' element={<App />}>

                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Product />} >
                        <Route index element={<ProductList />} />
                        <Route path=":id" element={<ProductDetaills />} />
                        <Route path="add" element={<AddProduct />} />
                    </Route>
                    <Route path="profile" element={<Profile />}>
                        <Route index element={<ProfileDetaills />} />
                        <Route path="edit" element={<EditProfile />} />
                    </Route >

                    </Route>
                ) : (<Route path="/" element={<Auth />} ></Route>)}
                    
                <Route path="*" element={<NotFound />} />
            </Routes>
        </UserContext.Provider>
</BrowserRouter>
</Provider>
    )
}