import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {skincareProducts} from '../constants/cards'
import Modl from './Modl';
export default class Product extends Component {
  render() {
    return (
       <div className='d-flex flex-wrap gap-3 justify-content-center '>
         {skincareProducts.map((e)=>(
            <Card style={{ width: '18rem' }} className='mt-5 d-flex justify-content-between  flex-column'  >
            <div className=''>
            <Card.Img variant="top" src={e.url} />
            <Card.Body>
              <Card.Title >{e.name}</Card.Title>
              <Card.Text>
               {e.description}
              </Card.Text>
             
            </Card.Body>
            </div>
           <div className='d-flex  flex-column gap-2 mx-2 mb-3'>
           <Button variant="primary">Add to card</Button>
            <Button variant="primary" onClick={(=>)}>View Details </Button>
           </div>
            
          </Card>
        ))
        }
       </div>
    
       
      
    )
  }
}
