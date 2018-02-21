import React from 'react';
import btnStyles from 'button.scss';

export default ({ children, className }) => (
  <button className={btnStyles[className || 'button']}>{children}</button>
);