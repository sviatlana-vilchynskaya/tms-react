import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ count, amount }) => (
  <div>
    <p>
      Basket
      <span className="basket__count">{count}</span>
    </p>
    <p className="basket__amount">
      amount:
      <span className="basket__amount_sum">{amount}</span>
      $
    </p>
  </div>
);

export default Basket;

Basket.propTypes = {
  count: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};
