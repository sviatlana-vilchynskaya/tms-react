import React, { Component } from 'react';

export default class Basket extends Component {
  render() {
    return (
      <div>
        <p>
          Basket
          <span className="basket__count">0</span>
        </p>
        <p className="basket__amount">
          amount:
          <span className="basket__amount_sum">0</span>
          $
        </p>
      </div>
    );
  }
}
