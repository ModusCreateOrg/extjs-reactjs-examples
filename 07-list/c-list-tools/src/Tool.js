import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';

const Tool = ({ icon = 'ArrowRight', onClick }) => (
  <FontAwesomeIcon icon={Icons[`fa${icon}`]} onClick={onClick}/>
);

export default Tool;