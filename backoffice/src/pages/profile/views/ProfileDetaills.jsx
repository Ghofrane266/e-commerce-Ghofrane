
import { useNavigate } from 'react-router-dom';
import './profiledetaills.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export default function ProfileDetaills({ isOpen }) {
  const user =useSelector((store)=>store.auth.me);
  
  const navigate = useNavigate()
  return (


    <section className='upc ml-5 mt-5'>
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={user.imageUrl} alt="user image" />
        <div className="profile-title">{user.userName} </div>
        <div className="profile-description">
          <div><strong>Job: </strong>{user.job}</div>
          <div><strong>E-mail: </strong>{user.Email}</div>
          <div><strong>Phone: </strong>{user.phone}</div>
        </div>
        <div className='icons d-flex justify-content-center gap-2 ' >
          <a href=""><FaInstagram size={22} /></a>
          <a href=""> <BsTwitterX size={22} /></a>
          <a href=""><FaLinkedinIn size={22} /></a>
        </div>
        <div className="profile-button btn" onClick={() => navigate("edit")}>Edit</div>
      </div>

    </section>
  )
}
