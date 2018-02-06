import React from 'react';

export default (props) => {
  const { userId } = props.match.params;

  return <h2>User Id: {userId}</h2>;
};