import React, { Component } from 'react';
import { func, object, array } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
} from '../actions/basketAction';
import '../styles/components/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.basket.productsID.find((item) => item === this.props.product.id)) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({ active: !prevState.active }), () => {
      this.state.active ? this.props.addToBasket({
        productsID: this.props.product.id,
        priceValue: this.props.product.price.value,
      })
        : this.props.removeFromBasket({
          productsID: this.props.product.id,
          priceValue: this.props.product.price.value,
        });
    });
  }

  render() {
    const text = this.state.active ? 'Remove from Basket' : 'Add to Basket';
    return (
      <a onClick={this.handleClick} className={classNames('button', { active: this.state.active })} href="#">{text}</a>
    );
  }
}

const mapStateToProps = (state) => ({
  basket: state.basket,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

Button.propTypes = {
  basket: object.isRequired,
  addToBasket: func.isRequired,
  removeFromBasket: func.isRequired,
  product: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
