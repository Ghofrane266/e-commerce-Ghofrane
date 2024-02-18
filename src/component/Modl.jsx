import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Modl extends Component {
  constructor(props) {
    super()

  }
  render() {
    return (


      <Modal show={this.props.show} onHide={this.props.handle}
        aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" >
            <strong>{this.props.selectedP ? this.props.selectedP.name : ''}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <strong>   <h4> ${this.props.selectedP ? this.props.selectedP.price : ''}</h4></strong>
          <p>
           <em>{this.props.selectedP ? this.props.selectedP.description : ''}</em> 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>this.props.handle()}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }





}

