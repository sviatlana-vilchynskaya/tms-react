import React, { useState, useEffect } from 'react';
import { object, func } from 'prop-types';
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
  ...props
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
        props.addToBasket({ productsID: product.id, priceValue: product.price.value });
      } else {
        props.removeFromBasket({ productsID: product.id, priceValue: product.price.value });
      }
    }
  }, [active]);

  const handleClick = (event) => {
    event.preventDefault();
    stateActive((prevState) => ({ status: !prevState.status, loader: true }));
  };

  const activeStatus = basket.productsID.includes(product.id);

  const text = activeStatus ? 'Remove from Basket' : 'Add to Basket';
  return (
    <a onClick={handleClick} className={classNames('add_to_basket', { _active: activeStatus })} href="#">{text}</a>
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
  addToBasket: func.isRequired,
  removeFromBasket: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
