import React, { useState } from 'react';
import {
  number, array, object, shape,
} from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
// HOCs
import { withRouter } from 'react-router';

import useStyles from '../styles/components/Header';

import Search from './Search';
import Basket from './Basket';
import Modal from './Modal';
import BasketCart from './BasketCart';


const Header = ({ basket = {}, products, history }) => {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);

  const handleClick = () => {
    history.push('/');
  };

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const { count = 0, amount = 0, productsID = [] } = basket;
  const basketProducts = products.filter((product) => productsID.includes(product.id));

  return (
    <header className={classes.Header__block}>
      <div className="container row">
        <div className={classes.Header__container}>
          <div><a href="#" onClick={handleClick} className={classes.header__logo}>The Best Shop</a></div>
          <Search />
          <Basket onClick={openModal} count={count} amount={amount} />
          <Modal display={modalActive} onClick={closeModal}>
            {basketProducts.length
              ? basketProducts.map((product) => (
                <BasketCart
                  key={product.id}
                  product={product}
                  handleBasket={(e) => {
                    console.log(e);
                  }}
                  variant="catalog"
                />
              ))
              : (
                <div className={classes.basket_text}>Basket is empty :(</div>
              )}
          </Modal>
        </div>
      </div>
    </header>
  );
};


Header.displayName = 'Header';

Header.propTypes = {
  basket: shape({
    count: number.isRequired,
    amount: number.isRequired,
  }).isRequired,
  products: array.isRequired,
  history: object.isRequired,
};


const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Header);
