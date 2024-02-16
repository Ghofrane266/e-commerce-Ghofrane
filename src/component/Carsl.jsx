import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { skincareProducts } from '../constants/cards'

export default class Carsl extends Component {
  render() {
    return (

      <Carousel>

        {skincareProducts.map((e) => (
          <Carousel.Item>
            <img
              className="  d-block w-80 mt-5" style={{height:'70vh',marginLeft:'30%'} }
              src={e.url}

            />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

