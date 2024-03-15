
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanv from './Offcanv';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IoMdLogIn } from "react-icons/io";
import './nav.css'


export default function Navb(props) {
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false);
    // const handleShow = () => setshow(true);
    console.log(props);

  
    return (
        
        <Navbar expand="lg" className="nav"  list={props.itemList}  addcart={props.addToCart}  changeValue={props.changeValue} changeitem={props.removeFromCart} >
            <Container fluid>
                <Navbar.Brand href="#"  className='fs-4 fw-bold textp'><i>logo</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  style={{color:"white"}}/>
                <Navbar.Collapse id="navbarScroll" style={{color:"white"}} >
                    <Nav
                        className="ms-auto my-2 m-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={NavLink} className='link' style={{color:"white",fontSize:"18px",fontWeight:500,marginRight:'24px'}}  >Home</Nav.Link>
                        
                        <Nav.Link to="/contact" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Contact</Nav.Link>
                        <Nav.Link to="/products" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Products</Nav.Link>
                        <Nav.Link to="/Blog" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Blog</Nav.Link>

                        <Nav.Link to="/login" as={NavLink} className='link' style={{color:"white",marginRight:'24px'}} ><IoMdLogIn size={25}/></Nav.Link>
                        
                    </Nav>

                    {/* <Form className="d-flex">
                        <FaCartPlus className='mx-3' size={40} onClick={handleShow} />
                     
                        <Form.Control
                            type="search"
                             placeholder=   "Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e)=>props.changeValue(e)}
                        />
                     
                    </Form> */}
                </Navbar.Collapse>
            </Container>
            <Offcanv show={show} onHide={handleClose} items={props.itemList}  removeitems={props.removeFromCart} />
        </Navbar>

    );

}
