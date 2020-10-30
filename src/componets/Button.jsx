import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';
// HOCs
import { connect } from 'react-redux';
// action
import {
  addToBasket,
  removeFromBasket,
} from '../actions/basketAction';
// style
import '../styles/components/Button.css';

const Button = ({
  product,
  basket,
}) => {
  const [active, stateActive] = useState({ status: true, loader: false });
  useEffect(() => {
    if (basket.productsID.find((item) => item === product.id)) {
      stateActive({ status: true, loader: false });
    } else {
      stateActive({ status: false, loader: false });
    }
  }, []);
  useEffect(() => {
    if (active.loader) {
      if (active.status) {
        addToBasket({ productsID: product.id, priceValue: product.price.value });
      } else {
        removeFromBasket({ productsID: product.id, priceValue: product.price.value });
      }
    }
  }, [active]);

  const handleClick = (event) => {
    event.preventDefault();
    stateActive((prevState) => ({ status: !prevState.status, loader: true }));
  };

  const text = active.status ? 'Remove from Basket' : 'Add to Basket';
  return (
    <a onClick={handleClick} className={classNames('add_to_basket', { _active: active.status })} href="#">{text}</a>
  );
};

Button.displayName = 'Button';

const mapStateToProps = (state) => ({
  basket: state.basket,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

Button.propTypes = {
  basket: object.isRequired,
  product: object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
