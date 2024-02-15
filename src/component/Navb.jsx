import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from "react-icons/fa6";
import React, { Component } from 'react'
import Offcanv from './Offcanv';

export default class Navb extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    this.handleClose=this.handleClose.bind(this)
    }
    handleShow(){
        this.setState({
            show:true
        })
    }
    handleClose(){
        this.setState({
            show:false
        })
    }
    render() {
        return (

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">vlog</Nav.Link>
                            <Nav.Link href="#action3">Products</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FaCartPlus size={50} className='mx-3'  onClick={()=>this.handleShow()}/>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
                <Offcanv  show={this.state.show} handleClose={this.handleClose}/>
            </Navbar>


        )
    }
}
