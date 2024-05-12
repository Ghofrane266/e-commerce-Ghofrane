import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/products'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './product.css'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, productsGrid } from '../../../data/dummy';
import Header from '../../../components/Header';

import product1 from '../../../data/product1.jpg'
import { MdOutlineDeleteOutline } from "react-icons/md";

import { IoIosArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";



export default function ProductList() {
  const editing = { allowDeleting: true, allowEditing: true };
  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products, "state")
  const navigate = useNavigate()

  return (

    <div className='flex'>


      <div className="m-5 mt-12 w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-4 rounded-t-lg" src={product1} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white" onClick={() => { navigate("detaills") }}>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center  justify-between">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>

            <MdOutlineDeleteOutline size={28} />
          </div>
        </div>
      </div>
      <div className="m-5 mt-12 w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div className="flex justify-center items-center h-full">
        <div className=" flex flex-col justify-center items-center">
          <div className='p-8 grow flex justify-center items-center'> <FaPlus size={40} /> </div>
          <div> <h1 onClick={() => navigate('add')} className='cursor-pointer font-semibold'>Add New Product</h1></div>
        </div>
        </div>
      </div>



    </div>






  )
}
