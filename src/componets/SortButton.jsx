import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';

import '../styles/components/SortButton.css';
import sortArray from '../helpers/sortArray';


class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({ active: !prevState.active }), () => (this.state.active
      ? sortArray(this.props.products, 'asc')
      : sortArray(this.props.products, 'desc')));
  }

  render() {
    const sort = this.state.active ? 'Desc' : 'Asc';
    console.log(this.props.products);
    return (
      <>
        <div>
          Sort by price:
          <a
            href="http://localhost:8000/"
            onClick={this.handleClick}
            className="products__sort"
            id="sort"
          >
            {sort}
          </a>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

SortButton.propTypes = {
  products: array.isRequired,
};


export default connect(mapStateToProps)(SortButton);
