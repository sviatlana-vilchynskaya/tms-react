import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { func } from 'prop-types';
// action
import {
  sortAsc,
  sortDesc,
} from '../actions/sortAction';
// styles
import '../styles/components/SortButton.css';


const SortButton = (props) => {
  const [active, setActive] = useState({ status: true, loader: false });

  useEffect(() => {
    if (active.loader) {
      if (active.status) props.sortDesc();
      else props.sortAsc();
    }
  }, [active]);

  const handleClick = (event) => {
    event.preventDefault();
    setActive((prevState) => ({ status: !prevState.status, loader: true }));
  };

  const sort = active.status ? 'Desc' : 'Asc';
  return (
    <>
      <div>
        Sort by price:
        <a onClick={handleClick} id="sort" href="#" className="products__sort">{sort}</a>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  sortDesc,
  sortAsc,
};

SortButton.propTypes = {
  sortAsc: func.isRequired,
  sortDesc: func.isRequired,
};

export default compose(
  connect(null, mapDispatchToProps),
)(SortButton);
