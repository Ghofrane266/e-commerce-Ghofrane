
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
        
        <Navbar expand="lg" className="nav"  list={props.itemList}  addcart={props.addToCart}  changeValue={props.changeValue} changeitem={props.removeFromCart} style={{position:'fixed',width:"100%"}} >
            <Container fluid>
                <Navbar.Brand href="#"  className='fs-4 fw-bold textp'><i>logo</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  style={{color:"white"}}/>
                <Navbar.Collapse id="navbarScroll" style={{color:"white"}} >
                {/* <Form >
                        {/* <FaCartPlus className='mx-3' size={40} onClick={handleShow} /> */}
{/*                      
                        <Form.Control
                     
                            type="search"
                             placeholder= "Search"
                            className=" ms-4 "
                            // aria-label="Search"
                            onChange={(e)=>props.changeValue(e)}
                        /> */}
                     
                    {/* </Form> */} 
                    <Nav
                        className="ms-auto my-2 m-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link to="/" as={NavLink} className='link' style={{color:"white",fontSize:"18px",fontWeight:500,marginRight:'24px'}}  >Home</Nav.Link>
                        
                        <Nav.Link to="/about" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >About</Nav.Link>
                        <Nav.Link to="/template" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >template</Nav.Link>
                        <Nav.Link to="/pricing" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Pricing</Nav.Link>
                        <Nav.Link to="/blog" as={NavLink} className='link' style={{color:"white" ,fontSize:"18px",fontWeight:500,marginRight:'24px'}} >Blog</Nav.Link>
                          
                        <Nav.Link to="/login" as={NavLink} className='link' style={{color:"white",marginRight:'24px'}} ><IoMdLogIn size={25}/></Nav.Link>
                        
                    </Nav>

                   
                </Navbar.Collapse>
            </Container>
            <Offcanv show={show} onHide={handleClose} items={props.itemList}  removeitems={props.removeFromCart} />
        </Navbar>

    );

}
