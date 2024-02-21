
import Navb from "./component/Navb"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./component/Product";
import { useState, useCallback } from "react";


export default function App() {

  const [itemList, setItemList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
// add to cart
  const addToCart = (product) => {
    setItemList(prevItemList => [...prevItemList, product])
  }
  const addcart = useCallback((product) => { addToCart(product) }, [])
  //remove product
  const removeFromCart = (productToRemove) => {
    setItemList(prevItemList => prevItemList.filter(product => product !== productToRemove));
  }
  const removeProduct = useCallback((product) => { removeFromCart(product) }, []);
  //change value
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (

    <>
      <Navb itemList={itemList} addcart={addcart}   changeValue={handleChange}/>
      <div><Product addcart={addcart} itemList={itemList}   searchValue={searchValue}/></div>

    </>

  )
}










