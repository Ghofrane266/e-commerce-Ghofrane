import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import { MdEdit } from "react-icons/md";

export default function EditProfile() {
  const [updatedName, setUpdatedName] = useState("")
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  return (


    <Card style={{ width: '30rem' }}>


      <Card.Body >
        <div><FaUserTie size={50}/></div>
        <div className='mt-3'><Card.Title> <strong>Information:</strong>
        </Card.Title>

          <Card.Text>
            <strong>First Name:</strong>
            <div ><input type="text" placeholder='first Name' />
              <MdEdit style={{ margin: "10px" }} size={20} />
            </div>
         <strong>   Last Name:</strong>
            <div ><input type="text" placeholder='Last Name' />
              <MdEdit style={{ margin: "10px" }} size={20} /></div>
           <strong> Job:</strong>
            <div ><input type="text" placeholder='job' />
              <MdEdit style={{ margin: "10px" }} size={20} /></div>
           <strong> Email:</strong>
            <div ><input type="text" placeholder='e-mail' />
              <MdEdit style={{ margin: "10px" }} size={20} /></div>
          <strong>  Phone:</strong>
            <div ><input type="text" placeholder='Phone' />
              <MdEdit style={{ margin: "10px" }} size={20} /></div>
          </Card.Text>
          <div className='btn' style={{ background: "#068DA9", marginLeft: "75%" }} onClick={() => { setUser({ ...user, userName: updatedName })
            navigate(-1)
          }} >Save</div>
        </div>
      </Card.Body>

    </Card>

  );
}