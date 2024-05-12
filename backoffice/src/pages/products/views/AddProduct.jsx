import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { sendProduct } from '../../../store/products';
import product1 from '../../../data/product1.jpg'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import './add.css'


export default function AddProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setProduct] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? +value : value })
  }
  return (
    <>
      <div className="m-5 mt-12 max-h-96   w-full max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='p-8 grow flex justify-center items-center '>

          <label htmlFor="file" className='labIcon'> <MdOutlineCloudUpload size={45} /></label>
          <input type="file" id='file' className='files'/>

        </div>
        <div className="px-5 pb-5">

          <div className="flex items-center mt-2.5 mb-5">
            <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white"> Title :</span>
            <input type="text" placeholder=' title'  />
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-sm font-bold text-gray-900 dark:text-white"> description :</span>
              <input type="text" placeholder='description' className=' max-h-8' />
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-sm font-bold text-gray-900 dark:text-white"> price :</span>
              <input type="number" placeholder='price'/>
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center  justify-between">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
              dispatch(sendProduct(product)).then((res) => {
                if (!res.error) navigate(-1);
              })
            }}>Send</a>

            <MdOutlineDeleteOutline size={28} />
          </div>
        </div>
      </div>



    </>
  )
}
