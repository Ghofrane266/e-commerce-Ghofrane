import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const [updateName,setUpdateName]=useState();
  const {user,setUser}=useContext(UserContext);
  const navigate=useNavigate()
  return (
    <div>EditProfile</div>
  )
}
