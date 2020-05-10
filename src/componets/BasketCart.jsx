import React from 'react';
import { object } from 'prop-types';
import viewNumber from '../helpers/viewNumber';

import '../styles/components/BasketCart.css';


const BasketCart = ({ product }) => (
  <>
    <div id="Content" className="container">
      <div className="content row">
        <div className="img">
          <img src={product.imageLink} alt="" />
        </div>
        <div className="textWidth">
          <p className="title">{product.title}</p>
          <p className="product__description" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div className="product__price">
          <p>{viewNumber(product.price.value)}</p>
        </div>
      </div>
    </div>
  </>
);

BasketCart.propTypes = {
  product: object.isRequired,
};
export default BasketCart;
