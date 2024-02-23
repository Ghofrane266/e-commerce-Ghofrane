
import Navb from "./component/Navb"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./component/Product";
import { useState } from "react";
import { Routes,Route} from "react-router-dom";
import Vlog from './pages/Vlog'
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
import CheckOut from "./pages/CheckOut";

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

    <div>
      <Navb itemList={itemList} addToCart={addToCart}   changeValue={handleChange} removeFromCart={removeFromCart}/>
      
      <Routes>
        <Route index element={<Product addToCart={addToCart} itemList={itemList}   searchValue={searchValue}/>}/>
        <Route path="/Vlog" element={<Vlog/>}/>
        <Route path="/OneProduct/:id" element={<OneProduct/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     
      

    </div>

  )
}










