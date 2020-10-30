import React from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import useStyles from '../styles/components/Searsh';

import { searchProducts } from '../actions';

// eslint-disable-next-line no-shadow
const Search = ({ searchProducts, ...props }) => {
  const classes = useStyles();
  const handleInput = (event) => {
    event.preventDefault();
    searchProducts({ productsOrigin: props.productsOrigin, searchString: event.target.value });
  };
  return (
    <form>
      <input onInput={handleInput} id="search" className={classes.input} type="text" placeholder="Search" />
    </form>
  );
};
const mapDispatchToProps = {
  searchProducts,
};
const mapStateToProps = (state) => ({
  productsOrigin: state.productsOrigin,

});

Search.propTypes = {
  productsOrigin: array,
  searchProducts: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
