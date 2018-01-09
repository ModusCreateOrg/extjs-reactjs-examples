import React from 'react';
import MyComponent from './MyComponent';

const MyContainer = () => {
  return (
    <div>
      <MyComponent />
      <MyComponent
          text="Making the world better, one line of code at a time!"
      />
    </div>
  );
};

export default MyContainer;

