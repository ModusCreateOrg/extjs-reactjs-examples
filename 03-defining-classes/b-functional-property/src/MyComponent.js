import React from 'react';

const MyComponent = ({ text = 'Hello from Modus!' }) => {
  return (
    <div>{text}</div>
  )
}

export default MyComponent

