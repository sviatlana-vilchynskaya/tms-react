import React, { Component } from 'react';
import MainBodyHeader from './MainBodyHeader';
import Products from './Products';

import '../styles/components/MainBody.css';

export default class MainBody extends Component {
  render() {
    return (
      <div className="container MainBody">
        <MainBodyHeader />
        <Products />
      </div>
    );
  }
}
