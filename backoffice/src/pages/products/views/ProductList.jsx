import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/products'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './product.css'
export default function ProductList() {
  // const products = useSelector((state) => state.products.products.items)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])
  // console.log(products,"state")
  const navigate= useNavigate()
  return (
    // <h2> Product List:</h2>
    <>
      <h4>    Product list:</h4>
      <Table  className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>description</th>
            <th>price</th>
            <th>quantites</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
           
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
            
          </tr>
        </tbody>
      </Table>

      <div className='add btn' style={{backgroundColor:"#068DA9",color:"white"}} onClick={()=>{navigate("add")}}>Add</div>
    </>
  )
}
