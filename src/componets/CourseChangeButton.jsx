import React, { Component } from 'react';
import '../styles/components/CourseChangeButton.css';
import { func } from 'prop-types';

export default class CourseChangeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => (
      { active: !prevState.active }), () => this.props.currencyProduct(this.state.active));
  }

  render() {
    const currency = !this.state.active ? 'BYN' : 'USD';
    return (
      <a onClick={this.handleClick} href="#" className="CourseChangeButton_bg">{currency}</a>
    );
  }
}
