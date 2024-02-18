import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { skincareProducts } from '../constants/cards'
import Modl from './Modl';
import Carsl from './Carsl';

export default class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      show: false,
      selectedProduct: null,

    }
    this.handleClose = this.handleClose.bind(this)

  }
  handleShow(product) {
    this.setState({
      show: true,
      selectedProduct: product,
    })
  }
  handleClose() {
    this.setState({
      show: false,
      selectedProduct: null
    })
  }
  render() {
    return (
      <>
   
        <div className='m-3'><Carsl/></div>
        <div className='d-flex flex-wrap gap-3 justify-content-center '>
        
        {skincareProducts.map((product) => (
          <Card key={product.id} style={{ width: '14rem' }} className='mt-5 d-flex justify-content-between  flex-column '  >
            <div className=''>
              <Card.Img variant="top" src={product.url}  className='mt-4'/>
              <Card.Body>
                <Card.Title ><strong><i>{product.name}</i></strong></Card.Title>
                <Card.Text>
                  <strong>${product.price}</strong>
                </Card.Text>

              </Card.Body>
            </div>
            <div className='d-flex  flex-column gap-2 mx-2 mb-3'>
              <Button variant="primary" >Add to cart</Button>
              <Button variant="primary" onClick={() => this.handleShow(product)}  >View Details </Button>
            </div>
            <Modl show={this.state.show} handle={this.handleClose} selectedP={this.state.selectedProduct} />
          </Card>
        ))
        }
      </div>
      </>
      
       )
  }
}

