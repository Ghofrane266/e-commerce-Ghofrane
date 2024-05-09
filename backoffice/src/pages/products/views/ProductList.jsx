import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/products'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './product.css'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, productsGrid } from '../../../data/dummy';
import  Header  from '../../../components/Header';






export default function ProductList() {
  const editing = { allowDeleting: true, allowEditing: true };
  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products,"state")
  const navigate= useNavigate()
  return (
   
    <>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {productsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>

      {/* <div className='add btn' style={{backgroundColor:"#068DA9",color:"white"}} onClick={()=>{navigate("detaills")}}>detaills</div>
       */}
      {/* <div className='add btn' style={{backgroundColor:"#068DA9",color:"white"}} onClick={()=>{navigate("add")}}>Add</div> */}
    </>
  )
}
