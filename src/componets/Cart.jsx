import React, { useState, useEffect, useRef } from 'react';
import { array, func } from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket } from '../actions/basketAction';

import Button from './Button';
import '../styles/components/Cart.css';
import viewNumber from '../helpers/viewNumber';

const initialActiveData = {
  status: false,
  id: '',
  price: 0,
  loaded: false,
};

const Cart = ({
  variant,
  products,
  product,
  addToBasket,
  removeFromBasket,
  hisory,
  match,
}) => {
  const [stateProduct, setStateProduct] = useState({ price: {} });
  const [activeData, setActiveData] = useState(initialActiveData);
  const imgEl = useRef(null);

  useEffect(() => {
    if (products.length && match.params && match.params.id) {
      const stateProduct = products.find((item) => item.id === match.params.id) || {};

      setStateProduct(stateProduct);
    }
  }, []);

  useEffect(() => {
    const {
      status, id, price, loaded,
    } = activeData;

    if (loaded) {
      if (status) {
        addToBasket({ productID: id, priceValue: price.value });
      } else {
        removeFromBasket({ productID: id, priceValue: price.value });
      }
      console.log(imgEl);
    }
  }, [activeData]);

  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/catalog/${product.id}`);
  };

  const handleBasket = ({ id, price }) => (event) => {
    event.preventDefault();
    setActiveData((prevState) => ({
      status: !prevState.status, id, price, loaded: true,
    }));
  };

  const productForView = product || stateProduct;

  return (
    <div>
      <img ref={imgEl} src={productForView.imageLink} alt={productForView.title} />
      {variant === 'catalog'
        ? <a href="#" onClick={handleClick}>{productForView.title}</a>
        : <p>{productForView.title}</p>}
      <p>{productForView.title}</p>
      <p dangerouslySetInnerHTML={{ __html: productForView.description }} />
      <p>{`${productForView.price.value} ${productForView.price.currency}`}</p>
      <a
        href="#"
        className="App-link"
        onClick={handleBasket(productForView)}
      >
        Add to basket
      </a>
    </div>
  );
};

/*
const Cart = (props) => {
  const product = props.products.find((item) => item.id === this.props.match.params.id);
  return (
    <section className="container " id="Content">
      <div className="row content">
        <div className="img">
          <img src={product.imageLink} alt=" " />
        </div>
        <div className="product__text">
          <p>{product.title}</p>
          <p className="product__description" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div className="product__price">
          <p>
            {viewNumber(product.price.value)}
            <Button product={product} />
          </p>
        </div>
      </div>
    </section>
  );
};
*/

Cart.displayName = 'Cart';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

Cart.propTypes = {
  products: array.isRequired,
  addToBasket: func.isRequired,
  removeFromBasket: func.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Cart);
