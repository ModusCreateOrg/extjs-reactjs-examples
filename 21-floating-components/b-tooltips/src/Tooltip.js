import React from 'react';
import './Tooltip.css';

const Tooltip = ({ children, tiptext, position = 't-t'}) => (
  <div data-tiptext={tiptext} className={`tooltip ${position}`}>
    {children}
  </div>
)

export default Tooltip;