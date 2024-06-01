import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, sendProduct } from '../../../store/products';
import product1 from '../../../data/product1.jpg'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import './add.css'
import axios from 'axios';
// import AutoComplete from '../../AutoComplete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function AddProduct() {
  const categorie=useSelector((state)=>state.products.categories)

  
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setProduct] = useState({ Images: [] });
  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages([...images, ...Array.from(e.target.files)]);
      // console.log(e.target.files[0])
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrls = [];
      for (let image of images) {
        const formData = new FormData();
        formData.append("file", image);

        const response = await axios.post(
          "http://localhost:5000/api/v1/upload",
          formData
        );

        imageUrls.push({
          url: response.data.path,
          alt: image.name,
        });
      }

      const productData = {
        ...product,
        Images: imageUrls
      };
      console.log(productData, "product with image URLs");

      dispatch(sendProduct(productData)).then((res) => {
        if (!res.error) navigate(-1);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? +value : value });
  };
  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  return (
    <>
      <div className="m-5 mt-12  overflow-auto   w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700" >
        <div className='p-8 grow flex justify-center items-center '>

          <label htmlFor="file" className='labIcon'> <MdOutlineCloudUpload size={45} /></label>
          <input type="file" id='file' className='files' name='url' multiple onChange={handleFileChange} />

        </div>
        <div className="px-5 pb-5">

          <div className="flex items-center mt-2.5 mb-5">
            <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white px-3"> Title :</span>
            <input type="text" placeholder=' title' name='title' onChange={handleChange} className="w-72 border-2 px-4 py-2 outline-none rounded-lg" />
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-sm font-bold text-gray-900 dark:text-white"> description :</span>
              <input type="text" placeholder='description'  name='description' onChange={handleChange} className="w-72 border-2 px-4 py-2 outline-none rounded-lg" />
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center ">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="text-sm font-bold text-gray-900 dark:text-white"> categorie :</span>
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categorie}
             sx={{ width: 300 }}
             onChange={(e,v)=>setProduct({...product,categorieId:v.id})}
             getOptionLabel={(option) => option.name}
             renderInput={(params) => <TextField {...params} label="Categories" />}
    />
              {/* <input type="text" placeholder='categorie' className=' max-h-8' name='categorie' onChange={handleChange}/> */}
            </div>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-sm font-bold text-gray-900 dark:text-white"> Link :</span>
              <input type="text" placeholder='link' name='link' onChange={handleChange} className="w-72 border-2 px-4 py-2 outline-none rounded-lg"/>
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">

              <span className="text-sm font-bold text-gray-900 dark:text-white"> price :</span>
              <input type="number" placeholder='price' name='price' onChange={handleChange} min={0} className="w-72 border-2 px-4 py-2 outline-none rounded-lg"/>
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
          </div>
          <div className="flex items-center  justify-between">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onSubmit}>Send</a>

            <MdOutlineDeleteOutline size={28} />
          </div>
        </div>
      </div>



    </>
  )
}
