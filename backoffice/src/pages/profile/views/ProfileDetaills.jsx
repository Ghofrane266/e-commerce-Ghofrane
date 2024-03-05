import React, { useContext } from 'react'
import { UserContext } from '../../../router/Router'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProfileDetaills() {
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
        <div className='align-items-center'>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              <p>  {user.userName}  {user.userLastName}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              <p>Age: {user.Age}</p>
              <p>Job:{user.job}</p>
              <p>Email:{user.Email}</p>
              <p>phone:{user.phone}</p>

            </Typography>
          </CardContent>
        </div>
        <CardActions className='d-flex justify-content-center'>
          <Button style={{ background: "#7FC7D9", color: "white" }} onClick={() => navigate("edit")}>Edit</Button>
        </CardActions>
      </Card>
    </section>
  )
}
