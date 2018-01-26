import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  const { children, className = '', company, firstName,
        hireDate, id, lastName, onClick, toolPosition } = props;
  const toolCls = toolPosition === 'left' ? 'item-tools-left' : '';

  return (
    <div
      className={`list-item ${className} ${toolCls}`}
      onClick={onClick}
      data-id={id}
    >
      <div className="body">
        <div className="main">{lastName}, {firstName}</div>
        <div className="secondary">
          {company}
          <span className="meta"> (hired: {hireDate})</span>
        </div>
      </div>

      <div className="tools">{children}</div>
    </div>
  );
};

export default ListItem;