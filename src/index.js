import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeStore } from './store';
import { Message } from './components/message';
import '../scss/styles.scss';
import '../css/styles.css';
/* eslint-disable  no-undef */

export const init = () => {
  const store = initializeStore();

  ReactDOM.render(
    <Provider store={store}>
      <Message/>
    </Provider>,
    document.getElementById('root')
  );
};

init();