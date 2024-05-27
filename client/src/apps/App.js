import React, { useState, useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Navb from "../components/Navb";
import Banner from "../components/Banner";

import Features from "../components/Features";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import OrderPopup from "../components/OrderPopup";
import { CartProvider, useCart } from "react-use-cart";
import { useSelector } from "react-redux";


const App = ({searchTerm, setSearchTerm}) => {
  const products = useSelector((state) => state.products.products.items)
  
  
    const [orderPopup, setOrderPopup] = React.useState(false);
  
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };


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
     

    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navb searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Header togglePlay={togglePlay} />
      <Services />
      <Banner togglePlay={togglePlay} />
      <Features />
      <Testimonial/>

      <Footer />  
     
    </main>
      
  );
};

export default App;






// import Navb from "../components/Navb"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from "react";

// import '../index.css'
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";



// export default function App() {

//   const [itemList, setItemList] = useState([]);
//   const [searchValue, setSearchValue] = useState('');
// // add to cart
//   const addToCart = (product) => {
//     setItemList(prevItemList => [...prevItemList, product])
//   }
//   //remove product
//   const removeFromCart = (productToRemove) => {
//     setItemList(prevItemList => prevItemList.filter(product => product !== productToRemove));
//   }
//   //change value
//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   }
  
//   return (

//     <>
//     <Navb itemList={itemList} addToCart={addToCart} handleChange={handleChange}   removeFromCart={removeFromCart}/>
// {/*       
//       <Routes> */}
//         {/* <Route index element={<Product addToCart={addToCart} itemList={itemList}   searchValue={searchValue}/>}/> */}
//         {/* <Route path="/" element={<Home/>}/>

//         <Route path="/Blog" element={<Blog/>}/> */}
//         {/* <Route path="/OneProduct/:id" element={<OneProduct/>}/> */}
//         {/* <Route path="/login" element={<Login/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/products" element={<Products/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/pricing" element={<Pricing/>}/>

        
        
//         <Route path="*" element={<NotFound/>}/>
//       </Routes> */}
     
    
//       {/* <Outlet/> */}
//       <Header/>
    
//     </>
      
  
      

 










