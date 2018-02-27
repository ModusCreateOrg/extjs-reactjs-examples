import React from 'react';

// MyComponent is defined as a functional React component (one that is defined
// as a function, rather than a class extending React.Component).  The component
// accepts a single prop of `text` with a default value of "Hello from Modus"
const MyComponent = ({ text = 'Hello from Modus!' }) => {
  return (
    <div>{text}</div>
  )
}

export default MyComponent

