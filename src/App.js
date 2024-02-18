
import React, { Component } from 'react'
import Navb from './component/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product';
import Carsl from './component/Carsl';
import { Routes,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './component/Home'
import Vlog from './component/Vlog';
import skinProduct from './component/SkinProduct'
import Parfumes from './component/Parfumes';
import HairProduct from './component/HairProduct'

export default class Navigate extends Component {
  constructor(){
super()
  }
  render() {
    return (
      <div>
        <Navb/>
    
        <Container>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Vlog" element={<Vlog/>}/>
            <Route path="/skin Product" element={<skinProduct/>}/>
            <Route path="/Hair Product" element={<HairProduct/>}/>
            <Route path="/Parfumes" element={<Parfumes/>}/>
          </Routes>
        </Container>
      
    
      </div>
    
    )
  }
}


