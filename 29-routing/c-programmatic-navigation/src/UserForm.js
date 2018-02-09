import React from 'react';

export default (props) => {
  const { userId } = props.match.params;
  const { history } = props;

  if (userId === '1234') {
    history.push('abcd');
  }

  return (
    <div>
      <h2>User Id: {userId}</h2>
    </div>
  )
};