import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
// action
import { connect } from 'react-redux';
import { changeCurrency } from '../actions/currencyAction';
// HOCs
// style
import useStyles from '../styles/components/CourseChangeButton';

const CurrencyButton = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState({ status: true, loader: false });

  useEffect(() => {
    if (active.loader) {
      if (!active.status) props.changeCurrency('BYN');
      else props.changeCurrency('USD');
    }
  }, [active]);

  const handleClick = (event) => {
    event.preventDefault();
    setActive((prevState) => ({ status: !prevState.status, loader: true }));
  };

  const currency = !active.status ? 'USD' : 'BYN';
  return (
    <a onClick={handleClick} href="#" className={classes.course_btn}>{currency}</a>
  );
};


const mapDispatchToProps = {
  changeCurrency,
};

CurrencyButton.propTypes = {
  changeCurrency: func.isRequired,
};

export default connect(null, mapDispatchToProps)(CurrencyButton);
