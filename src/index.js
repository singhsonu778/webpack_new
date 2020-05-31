import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import '../scss/styles.scss';
import '../css/styles.css';

export const init = () => {
    const message = _.join(['Hello', 'webpack'], ' ');

    ReactDOM.render(
        <div>{message}</div>,
        document.getElementById('root')
    );
};

init();