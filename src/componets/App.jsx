import React, { useEffect } from 'react';
import { bool, func } from 'prop-types';
import { compose } from 'redux';

// HOCs
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';

import {
  startLoader,
  endLoader,
  addProducts,
  addProductsOrigin,
  addValueBYN,
} from '../actions/index';

import Loader from './Loader';
import Header from './Header';
import MainBody from './MainBody';

// styles
import RootStyle from '../styles/index';
import useStyles from '../styles/components/App';
import sortArray from '../helpers/sortArray';

const cloneDeep = require('lodash.clonedeep');

//
const App = (props) => {
  RootStyle();
  const classes = useStyles();
  useEffect(() => {
    props.startLoader();
    setTimeout(() => {
      Promise.all([
        fetch('/api/products')
          .then((response) => response.json()),
        fetch('https://www.nbrb.by/api/exrates/rates/840?parammode=1')
          .then((response) => response.json()),

      ])
        .then(([products, nbrb]) => {
          props.addProducts(sortArray(products, 'desc'));
          props.addProductsOrigin(cloneDeep(products));
          props.addValueBYN(nbrb.Cur_OfficialRate);
          props.endLoader();
        })
        .catch((err) => {
          console.log(err);
          props.endLoader();
        });
    }, 1000);
  }, []);
  const { load } = props;
  return (
    <div className={classes.root}>
      <Loader display={load} />
      <Header />
      <MainBody />
    </div>
  );
};

const mapStateToProps = (state) => ({
  load: state.load,
});

const mapDispatchToProps = {
  startLoader,
  endLoader,
  addProducts,
  addProductsOrigin,
  addValueBYN,
};

App.displayName = 'App';

App.propTypes = {
  load: bool.isRequired,
  addProducts: func.isRequired,
  addProductsOrigin: func.isRequired,
  startLoader: func.isRequired,
  endLoader: func.isRequired,
  addValueBYN: func.isRequired,
};

export default compose(
  hot,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
