import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


export default function AddProduct() {
  const navigate=useNavigate()
  return (
    <>
      <h4>Add New Product:</h4>
      <Table className='table'>
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
            <td>#</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="number" /></td>

          </tr>
        </tbody>
      </Table>
<div className='add btn' style={{backgroundColor:"#068DA9",color:"white"}} onClick={()=>{navigate(-1)}}>
  Send
</div>

    </>
  )
}
