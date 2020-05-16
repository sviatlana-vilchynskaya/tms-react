import React from 'react';
import { array } from 'prop-types';

import { useParams } from 'react-router-dom';
// components
import Button from './Button';
// styles
import '../styles/components/Cart.css';
// helpers
import viewNumber from '../helpers/viewNumber';


const Cart = ({ products }) => {
  const params = useParams();

  const product = products.find((item) => item.id === params.id);
  return (
    <div id="Content" className="Products__block">
      <div className="product__wrap">
        <div className="product__img_wrap">
          <img className="product__img" src={product.imageLink} alt="" />
        </div>
        <div className="product__text">
          <a className="product__text_title" href="#">{product.title}</a>
          <p className="product__text_description" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div className="product__cost">
          <p>{viewNumber(product.price.value)}</p>
          <Button product={product} />
        </div>
      </div>
    </div>
  );
};
Cart.displayName = 'Cart';

Cart.propTypes = {
  products: array.isRequired,
};
export default Cart;
