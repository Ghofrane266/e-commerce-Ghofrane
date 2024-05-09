import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';
import './edit.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../store/auth';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";




export default function EditProfile({ inputs, title }) {
  const userInputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "username",
    },
    {
      id: 2,
      label: "Name and surname",
      type: "text",
      placeholder: "fullName",
    },
    {
      id: 3,
      label: "Email",
      type: "mail",
      placeholder: "email",
    },
    {
      id: 4,
      label: "Phone",
      type: "number",
      placeholder: "phone",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
      placeholder:"password"
    },
    {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "address",
    },
    {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "country",
    },
  ];
    const [file, setFile] = useState("");
  // const [userUpdated, setUserUpdated] = useState({})
  // const user =useSelector((store)=>store.auth.me);
  // const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserUpdated({ ...userUpdated, [name]: value })
  // }
  // const navigate = useNavigate()
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
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form className='forms'>
            <div className="formInput">
              <label htmlFor="file" className='lab'>
                Image: <DriveFolderUploadOutlinedIcon className="icons" />
              </label>
              <input
              className='inputs'
                type="file"
                id="file"
                 onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

           
            {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className='lab'>{input.label}</label>
                  <input className='inputs' type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
           
            <button className='butt'>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>




    // <section className="upc ml-5 mt-5">
    //   <div className="gradiant"></div>
    //   <div className="profile-down">
    //     <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
    //     {/* <div className="profile-title">User Name</div> */}
    //     <div className="profile-description">
    //       <div> User Name:</div>
    //       <input name='fullName' type="text" placeholder='user name' value={userUpdated.fullName}  onChange={handleChange} />
    //       <div>Address:</div>
    //       <input name='address' type="text" placeholder='address' value={userUpdated.address}  onChange={handleChange}/>
    //       <div>Email:</div>
    //       <input name='email' type="text" placeholder='email' value={userUpdated.email} onChange={handleChange} />
    //       <div>Phone:</div>
    //       <input name='phone' type="text" placeholder='phone' value={userUpdated.phone} onChange={handleChange} />
    //     </div>
    //     <div className="profile-button btn" onClick={() => {
    //       dispatch( updateProfile(userUpdated)).then((res)=>{
    //         if(!res.error){
    //           navigate(-1)
    //         }
    //       });
         
    //     }

    //     }>Save</div>
    //   </div>
    // </section>

  );
}