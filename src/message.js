import React from 'react';
import _ from 'lodash';

export const Message = () => {
  const message = _.join(['Hello', 'webpack'], ' ');
  return (
    <div>{message}</div>
  );
};