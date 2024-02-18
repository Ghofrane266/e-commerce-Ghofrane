import React, { Component } from 'react'
import Product from './Product';
import Offcanv from './Offcanv';
export default class AddCart extends Component {
    constructor() {
        super()
        this.state = {
            itemList: []
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(product) {
        this.setState(prevState => ({
            itemList: [...prevState.itemList, product]
        }));
    }
    render() {
        return (
            <div>
                <Offcanv itemList={this.state.itemList} />
                <Product addToCart={this.addToCart} />
            </div>
        )
    }
}
