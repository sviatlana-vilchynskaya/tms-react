import React from 'react';
import { array, func } from 'prop-types';

import 'styles/components/Modal.css';
import WithDisplay from '../HOCs/withDisplay';

const Modal = (props) => (
  <>
    <div role="document" onClick={props.onClick} className="Modal-background">
      <div className="Modal-root">
        <p className="modal-root-text">Basket</p>
        {props.children}
      </div>
    </div>
  </>
);


Modal.propTypes = {
  children: array.isRequired,
  onClick: func.isRequired,
};

export default WithDisplay(Modal);
