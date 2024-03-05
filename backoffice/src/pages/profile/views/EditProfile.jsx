import React, { useContext, useState } from 'react'
import { UserContext } from '../../../router/Router';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function EditProfile() {
  const [updatedName, setUpdatedName] = useState("")
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  return (

    <section className="d-flex justify-content-center p-5">
      <Card style={{ width: "500px", height: "500px" }} >

        <CardMedia
          component="img"
          height="140"
          src={user.imageUrl}
        />


        <CardContent>
          <div className='py-5 mx-3'>
            <div>   <input type="text" placeholder="FirstName" style={{ width: "450px" }} onChange={(e) => setUpdatedName(e.target.value)} /></div>

            <div>
              <input type="text" placeholder="LastName" style={{ width: "450px" }} />
            </div>
            <div>
              <input type="text" placeholder="email address" style={{ width: "450px" }} />
            </div>
            <div>
              <input type="text" placeholder="job" style={{ width: "450px" }} />
            </div>

            <div>
              <input type="text" placeholder="phone number" style={{ width: "450px" }} />
            </div>

          </div>
        </CardContent>



        <CardActions >
          <div><Button size="small" onClick={() => {
            setUser({ ...user, userName: updatedName })
            navigate(-1)
          }}>Save</Button></div>
        </CardActions>

      </Card>
    </section>

  );
}