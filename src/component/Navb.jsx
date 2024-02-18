import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from "react-icons/fa6";
import React, { Component } from 'react'
import Offcanv from './Offcanv';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default class Navb extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this)
    }
    handleShow() {
        this.setState({
            show: true
        })
    }
    handleClose() {
        this.setState({
            show: false
        })
    }
    render() {
        return (

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><strong><i>My Beauty</i></strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 mx-5 gap-2"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/Home" as={NavLink} ><i>Home</i></Nav.Link>
                            <Nav.Link to="/Vlog" as={NavLink}><i>Vlog</i></Nav.Link>
                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3"><Nav.Link to="/Hair Product" as={NavLink}><i>Hair Product</i></Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                               <Nav.Link to="/skin Product" as={NavLink}>  skin Product</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                <Nav.Link to=" /Parfumes" as={NavLink}> Parfumes</Nav.Link>
                    
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>


                        </Nav>
                        <Form className="d-flex">
                            <FaCartPlus size={50} className='mx-3' onClick={() => this.handleShow()} />
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
                <Offcanv show={this.state.show} handleClose={this.handleClose} />
            </Navbar>


        )
    }
}
