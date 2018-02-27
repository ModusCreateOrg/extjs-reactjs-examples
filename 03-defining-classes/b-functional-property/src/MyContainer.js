import React from 'react';
import MyComponent from './MyComponent';

// MyContainer instantiates two MyComponents
// - the first with a default text value
// - the second with a value passed in using MyComponent's 'text' attribute
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

