import React from 'react';
import { bool, func } from 'prop-types';
// HOCs
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';

import {
  // addToBasket,
  // removeFromBasket,
  endLoader,
  startLoader,
  // addProducts,
} from 'actions';
import '../styles/components/App.css';
import Loader from './Loader';
import Header from './Header';
import MainBody from './MainBody';
import sortArray from '../helpers/sortArray';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      basket: {
        productIds: [],
        count: 0,
        amount: 0,
      },
      products: [],
    };
    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  componentDidMount() {
    this.props.startLoader();

    setTimeout(() => {
      Promise.all([
        fetch('/api/products').then((response) => response.json()),
        fetch('https://www.nbrb.by/api/exrates/rates/840?parammode=1').then((response) => response.json()),
      ])
        .then(([products, nbrb]) => {
          this.setState({
            products: products.map((item = {}) => {
              const product = { ...item };
              product.price.value *= nbrb.Cur_OfficialRate;
              product.price.currency = 'BYN';

              return product;
            }),
          }, () => {
            this.props.endLoader();
          });
        })
        .catch((err) => {
          console.log(err);
          this.props.endLoader();
        });
    }, 1000);
  }

  addToBasket(product) {
    this.setState((prevState) => ({
      basket: {
        productIds: [...prevState.basket.productIds, product.id],
        count: prevState.basket.count + 1,
        amount: prevState.basket.amount + product.price.value,
      },
    }));
  }

  removeFromBasket(product) {
    this.setState((prevState) => ({
      basket: {
        productIds: [...prevState.basket.productIds, product.id],
        count: prevState.basket.count - 1,
        amount: prevState.basket.amount - product.price.value,
      },
    }));
  }

  render() {
    const { products } = this.state;
    const { load } = this.props;

    console.log(this.props);

    sortArray(products, 'desc');
    return (
      <div className="App">
        <Loader active={load} />
        <Header products={products} title="My App!" basket={this.state.basket} />
        <MainBody
          products={products}
          addToBasket={this.addToBasket}
          removeFromBasket={this.removeFromBasket}
        />
      </div>
    );
  }
}

App.propTypes = {
  endLoader: func.isRequired,
  load: bool.isRequired,
  startLoader: func.isRequired,
};
const mapStateToProps = (state) => ({
  load: state.load,
});

const mapDispatchToProps = {
  startLoader,
  endLoader,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
