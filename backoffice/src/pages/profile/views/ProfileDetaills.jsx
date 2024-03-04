import React, { useContext } from 'react'
import { UserContext } from '../../../router/Router'
import { useNavigate } from 'react-router-dom';

export default function ProfileDetaills() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div>ProfileDetaills</div>
  )
}
