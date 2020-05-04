import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Search from './Search';
import Basket from './Basket';
import '../styles/components/Header.css';
import '../styles/components/Search.css';

const Header = ({ basket }) => (
  <div className="Header__block">
    <div className="container Header__container">
      <Logo />
      <Search />
      <Basket count={basket.count} amount={basket.amount} />
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  basket: PropTypes.shape({
    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
