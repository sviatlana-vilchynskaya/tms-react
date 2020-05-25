import React from 'react';
import { array } from 'prop-types';

import { connect } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Cart from './Cart';
import Content from './Content';
import MainBodyHeader from './MainBodyHeader';

import useStyles from '../styles/components/MainBody';


const MainBody = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.MainBody}>
      <main className="products container">
        <MainBodyHeader />
        <Switch>
          <Route path="/" exact>
            {products.map((item) => (
              <Content
                key={item.id}
                product={item}
              />
            ))}
          </Route>
          <Route path="/:id">
            <Cart
              products={products}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

MainBody.propTypes = {
  products: array.isRequired,
};


export default connect(mapStateToProps)(MainBody);
