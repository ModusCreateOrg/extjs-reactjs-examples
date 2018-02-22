import React from 'react';
import btnStyles from 'button.scss';

export default ({ children, className }) => {
  const isString = typeof className === 'string';
  const clsName = isString ? btnStyles[className || 'button'] : className;

  return <button className={clsName}>{children}</button>;
};