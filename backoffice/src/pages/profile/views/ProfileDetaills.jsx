
import React from "react";
import "./profiledetaills.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProfileDetaills = () => {
  const user = useSelector((store) => store.auth.me);
  const navigate = useNavigate()
  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="tops">
          <div className="lefts">
            <div className="editButton" onClick={()=>navigate("edit")}>Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.avatarUrl}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.fullName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {user.address}
                  </span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="rights">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          {/* <List/> */}
        {/* </div>  */}
      </div>
    </div>
  );
};

export default ProfileDetaills;