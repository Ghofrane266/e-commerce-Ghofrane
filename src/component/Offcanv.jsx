import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Product from './Product';

export default class Offcanv extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
        <>
     {
      console.log(this.props,"props")
     }
  
        <Offcanvas show={this.props.show} onHide={this.props.handleClose}  >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>List of Product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul>
              {this.props.itemList.map((product, index) => (
                <li key={index}>{product.name}</li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
}

