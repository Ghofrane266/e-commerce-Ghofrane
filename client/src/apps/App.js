
import Navb from "../components/Navb"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from "./components/Product";
import { useState } from "react";
import { Routes,Route} from "react-router-dom";
import Blog from '../pages/Blog'
import OneProduct from "../pages/OneProduct";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Home from '../pages/Home'
import '../apps/App.css'

import Login from "../pages/Login";
import Products from "../pages/Products";
import About from "../pages/About";
import Pricing from "../pages/Pricing";

export default function App() {

  const [itemList, setItemList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
// add to cart
  const addToCart = (product) => {
    setItemList(prevItemList => [...prevItemList, product])
  }
  //remove product
  const removeFromCart = (productToRemove) => {
    setItemList(prevItemList => prevItemList.filter(product => product !== productToRemove));
  }
  //change value
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (

    <>
    <Navb itemList={itemList} addToCart={addToCart} handleChange={handleChange}   removeFromCart={removeFromCart}/>
      
      <Routes>
        {/* <Route index element={<Product addToCart={addToCart} itemList={itemList}   searchValue={searchValue}/>}/> */}
        <Route path="/" element={<Home/>}/>

        <Route path="/Blog" element={<Blog/>}/>
        {/* <Route path="/OneProduct/:id" element={<OneProduct/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>

        
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     
    
      
    
    </>
      
  
      

  )
}










