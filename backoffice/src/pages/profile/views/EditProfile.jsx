import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';
import './edit.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../store/auth';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';




export default function EditProfile({ title }) {

  const navigate = useNavigate()
  const user = useSelector((store) => store.auth.me);
  const [userUpdated, setUserUpdated] = useState({})
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserUpdated({ ...userUpdated, [name]: value })
  }
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0])
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await axios.post(
        "http://localhost:5000/api/v1/upload",
        formData
      );
      const profileImage = { ...userUpdated, avatarUrl: response.data.path };
      console.log(profileImage, "profile image url");
      dispatch(updateProfile(profileImage));
    } catch (error) {
      console.error("Error uploading file:", error);

    }
  };




  return (

    <div className="new">

      <div className="newContainer">

        <div className="top">
          <h1 className='hhh'>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className='imgs'
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className='forms' onSubmit={onSubmit}>
              <div className="formInput">
                <label htmlFor="file" className='lab'>
                  Image: <DriveFolderUploadOutlinedIcon className="icons" />
                </label>
                <input
                  className='inputs'
                  type="file"
                  id="file"
                  name='avatarUrl'
                  value={userUpdated.avatarUrl}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>



              <div className="formInput" key={1}>
                <label className='lab'>Email</label>
                <input className='inputs' type='email' placeholder='email' name='email' value={userUpdated.email} onChange={handleChange} />
              </div>
              <div className="formInput" key={2}>
                <label className='lab'>FullName</label>
                <input className='inputs' type='text' placeholder='fullName' name='fullName' value={userUpdated.fullName} onChange={handleChange} />
              </div>
              <div className="formInput" key={3}>
                <label className='lab'>Password</label>

                           <input className='inputs' type='password' placeholder='password' name='password' value={userUpdated.password} onChange={handleChange} disabled />

              </div>
              <div className="formInput" key={4}>
                <label className='lab'>Phone</label>
                <input className='inputs' type='number' placeholder='phone' name='phone' value={userUpdated.phone} onChange={handleChange} />
              </div>
              <div className="formInput" key={5}>
                <label className='lab'>Address</label>
                <input className='inputs' type='text' placeholder='address' name='address' value={userUpdated.address} onChange={handleChange} />
              </div>



              <button className='butt' onClick={() => {
                dispatch(updateProfile(userUpdated)).then((res) => {
                  if (!res.error) {
                    navigate(-1)
                  }
                });

              }

              }>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


