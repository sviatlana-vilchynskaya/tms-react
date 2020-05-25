import React from 'react';
import { number, func } from 'prop-types';

import useStyles from '../styles/components/Basket.js';
import viewNumber from '../helpers/viewNumber';


const Basket = ({ count, amount, onClick }) => {
  const classes = useStyles();
  return (
    <div onClick={onClick} className={classes.basket}>
      <div>
        Basket
        <span id="count" className={classes.basket__count}>{count}</span>
      </div>
      <div className={classes.basket__amount}>
        amount:
      </div>
      <span id="amount">
        {viewNumber(amount)}
        $
      </span>
    </div>
  );
};


Basket.propTypes = {
  count: number.isRequired,
  amount: number.isRequired,
  onClick: func.isRequired,
};

export default Basket;
