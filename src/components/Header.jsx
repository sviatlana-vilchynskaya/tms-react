import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import Basket from './Basket';
import '../styles/components/Header.css';
import '../styles/components/Search.css';
import '../styles/components/Basket.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header__block">
        <div className="container Header__container">
          <Logo />
          <Search />
          <Basket />
        </div>
      </div>
    );
  }
}
