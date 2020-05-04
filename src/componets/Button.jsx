import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Button.css';
import classNames from 'classnames';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({ active: !prevState.active }), () => {
      this.props.onClick(this.state.active);
    });
  }

  render() {
    const { active } = this.state;
    const text = active ? 'Remove from Basket' : 'Add to Basket';
    return (
      <>
        <a className={classNames('add_to_basket', { _active: active })} href="/" onClick={this.handleClick}>{text}</a>
      </>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
