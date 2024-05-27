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
import  Swal   from 'sweetalert2'
import { deleteProduct } from '../../../store/products'

export default function ProductList() {

  const handelDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId))
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting your product.",
              icon: "error"
            });
          });
      }
    });
  }
  
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

      {products.map((product, index) =>
        <div className="m-5 mt-12 w-full max-w-96 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 max-h-90">
          <a >
            <img className="p-2 rounded-t-lg" src={product.Images[0].url} alt="product image" style={{ height: "150px", width: "100%" }} />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white" onClick={() => { navigate("detaills") }}>{product.title}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">

                <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
              </div>
              {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
            </div>
            <div className="flex items-center  justify-between">
              <a onClick={()=>window.open(`${product?.link}`)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">live preview</a>


              <MdOutlineDeleteOutline size={20} onClick={() => handelDelete(product.id)} />

            </div>
          </div>
        </div>
      )}
      <div className="m-5 mt-12 w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">

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
