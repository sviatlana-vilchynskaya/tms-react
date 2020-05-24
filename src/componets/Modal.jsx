import React from 'react';
import { array, func } from 'prop-types';

import 'styles/components/Modal.css';
import WithDisplay from '../HOCs/withDisplay';

const Modal = ({ onClick, children }) => (
  <>
    <div role="document" className="Modal-background">
      <div className="Modal-root">
        <a href="#" className="close_btn" onClick={onClick}>×</a>
        <p className="modal-root-text modal_header">Basket</p>
        {children}
      </div>
    </div>
  </>
);


Modal.propTypes = {
  children: array.isRequired,
  onClick: func.isRequired,
};

export default WithDisplay(Modal);
