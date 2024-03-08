import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { sendProduct } from '../../../store/products';

export default function AddProduct() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [product,setProduct]=useState({});
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]:name==="price"? +value:value})
  }
  return (
    <>
      <h4>Add New Product:</h4>
      <Table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>description</th>
            <th>image</th>
            <th>url</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td><input name='title' className='form-control'  placeholder="title"  onChange={handleChange}/></td>
            <td><input  name='description' className='form-control' placeholder="description" onChange={handleChange}/></td>
            <td><input  name='image' className='form-control' placeholder="image" onChange={handleChange}/></td>
            <td><input  name='url' className='form-control' placeholder="url" onChange={handleChange}/></td>
            <td><input min={0} name='price' className='form-control' placeholder="price" type='number'onChange={handleChange}/></td>

          </tr>
        </tbody>
      </Table>
<button className='add btn' style={{backgroundColor:"#068DA9",color:"white"}} onClick={()=>{dispatch(sendProduct(product)).then((res)=>{
  if(!res.error) navigate(-1);
})}}>
  Send
</button>

    </>
  )
}
