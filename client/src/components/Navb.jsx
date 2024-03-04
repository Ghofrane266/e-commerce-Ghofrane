
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus } from "react-icons/fa6";
import Offcanv from './Offcanv';
import { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";


export default function Navb(props) {
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);
    console.log(props);

  
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary"  list={props.itemList}  addcart={props.addToCart}  changeValue={props.changeValue} changeitem={props.removeFromCart} >
            <Container fluid>
                <Navbar.Brand href="#"><strong><i>My Beauty</i></strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 m-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/Vlog" as={NavLink}>Vlog</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">  Skin Product</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Hair Product
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Parfumes
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex">
                        <FaCartPlus className='mx-3' size={40} onClick={handleShow} />
                     {/* <div className='d-flex align-items-center px-4 '> */}
                     {/* <IoSearchOutline/> */}
                     {/* <input type="search"  placeholder="Search" aria-label="Search"  onChange={(e)=>props.changeValue(e)} /> */}
                        <Form.Control
                            type="search"
                             placeholder=   "Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e)=>props.changeValue(e)}
                        />
                     {/* </div> */}
                        {/* <Button variant="outline-success" onClick={ props.changeValue}>Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Container>
            <Offcanv show={show} onHide={handleClose} items={props.itemList}  removeitems={props.removeFromCart} />
        </Navbar>

    );

}
