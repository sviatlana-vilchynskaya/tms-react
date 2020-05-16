import React from 'react';

import { object } from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from './Button';

import viewNumber from '../helpers/viewNumber';
import '../styles/components/Content.css';


const Content = ({ product }) => {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/${product.id}`);
  };
  return (
    <div id="Content" className="Products__block">
      <div className="product__wrap">
        <div className="product__img_wrap">
          <img className="product__img" src={product.imageLink} alt="" />
        </div>
        <div className="product__text">
          <a onClick={handleClick} className="product__text_title" href="#">{product.title}</a>
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
/* return (
    <div id = 'Content' className="Products__block">
      <div className="row product__wrap">
        <div className="product__cell">
          <div className="product__img_wrap">
            <img className="product__img" src={product.imageLink} alt=""/>
          </div>
          <div className="product__text">
            <p className="product__text_title">MacBook Pro</p>
            <p className="product__text_description">
              2.3GHz 8-Core Processor
              <br/>
              1TB Storage
              <br/>
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
  ); */

Content.displayName = 'Content';

Content.propTypes = {
  product: object.isRequired,
};
export default Content;
