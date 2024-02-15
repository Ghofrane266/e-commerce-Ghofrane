import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {skincareProducts} from '../constants/cards'
export default class Product extends Component {
  render() {
    return (
       <div className='d-flex flex-wrap gap-3 justify-content-center '>
         {skincareProducts.map((e)=>(
            <Card style={{ width: '18rem' }} className='mt-5 d-flex justify-content-between '  >
            <div className=''>
            <Card.Img variant="top" src={e.url} />
            <Card.Body>
              <Card.Title >{e.name}</Card.Title>
              <Card.Text>
               {e.description}
              </Card.Text>
             
            </Card.Body>
            </div>
            <Button variant="primary">Add to card</Button>
          </Card>
        ))
        }
       </div>
       
      
    )
  }
}
