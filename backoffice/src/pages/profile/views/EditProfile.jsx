import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';
import './profiledetaills.css'
import { useDispatch, useSelector } from 'react-redux';



export default function EditProfile() {
  const [userUpdated, setUserUpdated] = useState({})
  const user =useSelector((store)=>store.auth.me);
  const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserUpdated({ ...userUpdated, [name]: value })
  // }
  const navigate = useNavigate()
  return (
    <section className="upc ml-5 mt-5">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
        {/* <div className="profile-title">User Name</div> */}
        <div className="profile-description">
          <div> User Name:</div>
          <input name='userName' type="text" placeholder='user name' value={userUpdated.FullName}  />
          <div>Job:</div>
          <input name='job' type="text" placeholder='job' value={userUpdated.job}  />
          <div>Email:</div>
          <input name='Email' type="text" placeholder='email' value={userUpdated.Email}  />
          <div>Phone:</div>
          <input name='phone' type="text" placeholder='phone' value={userUpdated.phone}  />
        </div>
        <div className="profile-button btn" onClick={() => {
          dispatch({ ...user, ...userUpdated });
          navigate(-1)
        }

        }>Save</div>
      </div>
    </section>

  );
}