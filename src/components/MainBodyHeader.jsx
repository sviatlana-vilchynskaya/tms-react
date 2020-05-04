import React, { Component } from 'react';
import '../styles/components/MainBodyHeader.css';

export default class MainBodyHeader extends Component {
  render() {
    return (
      <div className="wrap Products__sort_wrap">
        <p className="Products__sort_value">Electronics</p>
        <p className="Products__sort_value">
          Sort by price:
          <a href="/" id="Products__value_change">Desc</a>
        </p>
      </div>
    );
  }
}
