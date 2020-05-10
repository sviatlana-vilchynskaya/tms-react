import React from 'react';
import { array, func } from 'prop-types';

import { connect } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Cart from './Cart';
import SortButton from './SortButton';
import Content from './Content';
import CourseChangeButton from './CourseChangeButton';
import MainBodyHeader from './MainBodyHeader';

import '../styles/components/MainBody.css';


const MainBody = ({ products, currencyProduct }) => {
  console.log(products);
  return (
    <MainBodyHeader className="container">
      <div className="wrap Products__sort_wrap">
        <div className="Products__sort_value">
          <h3>Electronics</h3>
          {/* <CourseChangeButton className="CourseChangeButton_bg" currencyProduct={currencyProduct} /> */}
          <SortButton className="Products__value_change" />
        </div>
        {products.map((product) => {
          console.log(product);

          // return (
          //   <Content
          //     key={product.id}
          //     product={product}
          //   />
          // )
        })}

        {/* <Switch>

          <Route path="/" exact>
            {products.map((product) => (
              <Content
                key={product.id}
                product={product}
              />
            ))}
          </Route>
          <Route path="/:id">
            <Cart
              products={products}
            />
          </Route>
        </Switch> */}
      </div>
    </MainBodyHeader>
  );
};


const mapStateToProps = (state) => ({
  products: state.products,
});

MainBody.propTypes = {
  products: array.isRequired,
};


export default connect(mapStateToProps)(MainBody);
