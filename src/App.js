
import React, { Component } from 'react'
import Navb from './component/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product';
import Carsl from './component/Carsl';


export default class Navigate extends Component {
  constructor(){
super()
  }
  render() {
    return (
      <div>
        <Navb/>
        <Carsl/>
        <Product/>
        
    
      </div>
    
    )
  }
}


