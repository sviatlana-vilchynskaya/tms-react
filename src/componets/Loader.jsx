import React from 'react';

import '../styles/components/Loader.css';

import withDisplay from '../HOCs/withDisplay';


const Loader = () => (
  <div className="Loader">
    <div className="Loader__child">Loading...</div>
  </div>
);

Loader.displayName = 'Loader';

export default withDisplay(Loader);
