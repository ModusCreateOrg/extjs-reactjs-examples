import React from 'react';
import btnStyles from 'button.scss';

export default ({ children, className, ui }) => {
  let clsName = (btnStyles[className || 'button']) || '';

  clsName += ui ? ` ${ui}` : '';

  return <button className={clsName}>{children}</button>;
};