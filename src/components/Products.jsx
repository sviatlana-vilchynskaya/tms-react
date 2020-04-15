import React, { Component } from 'react';
import '../styles/components/Products.css';
import image from '../assets/image.jpg';

export default class Products extends Component {
  render() {
    return (
      <div className="Products__block">
        <div className="wrap product__wrap">
          <div className="product__cell">
            <div className="product__img_wrap">
              <img className="product__img" alt="pic" src={image} />
            </div>
            <div className="product__text">
              <p className="product__text_title">MacBook Pro</p>
              <p className="product__text_description">
                2.3GHz 8-Core Processor
                <br />
                1TB Storage
                <br />
                AMD Radeon Pro 5500M
              </p>
            </div>
          </div>
          <div className="product__cost">
            <p className="product__cost_info">$2,799.00</p>
            <a className="basket__button" href="/">Add to Basket</a>
          </div>
        </div>
      </div>
    );
  }
}
