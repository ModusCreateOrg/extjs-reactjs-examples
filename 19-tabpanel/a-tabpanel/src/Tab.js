import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';
import './Tab.css';

const Tab = props => {
  const { tabtext, icon, activetab, cardindex, onClick } = props,
        isActive = activetab === cardindex ? 'active' : '';

  return (
    <div className={`tab ${isActive}`} onClick={onClick}>
      {icon ? <FontAwesome icon={Icons[`fa${icon}`]} /> : ''}
      {tabtext}
    </div>
  );
};

export default Tab;
