import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from './message';
import '../scss/styles.scss';
import '../css/styles.css';
/* eslint-disable  no-undef */

export const init = () => {
  ReactDOM.render(
    <Message/>,
    document.getElementById('root')
  );
};

init();