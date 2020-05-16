import React from 'react';
import { number, func } from 'prop-types';

import '../styles/components/Basket.css';
import viewNumber from '../helpers/viewNumber';


const Basket = ({ count, amount, onClick }) => (
  <div onClick={onClick} className="basket">
    <div>
      Basket
      <span id="count" className="basket__count">{count}</span>
    </div>
    <div className="basket__amount">
      amount:
    </div>
    <span id="amount">
      {viewNumber(amount)}
      $
    </span>
  </div>
);

Basket.propTypes = {
  count: number.isRequired,
  amount: number.isRequired,
  onClick: func.isRequired,
};

export default Basket;
