import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
  
        <Offcanvas show={this.props.show} onHide={this.props.handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
}

