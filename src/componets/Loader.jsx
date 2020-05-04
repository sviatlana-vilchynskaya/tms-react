import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({ active }) => (
  <div className={classNames('Loader', { active })}>
    <div className={classNames('Loader__child')}>Loading...</div>
  </div>
);

Loader.displayName = 'Loader';

Loader.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Loader;
