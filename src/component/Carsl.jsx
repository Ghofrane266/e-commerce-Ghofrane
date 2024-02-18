import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { beautyproduct } from '../constants/crslimage';

export default class Carsl extends Component {
  render() {
    return (

      <Carousel>

        {beautyproduct.map((e) => (
          <Carousel.Item>
            <img
              className="  d-block w-100 " style={{height:'80vh' } }
              src={e.url}

            />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

