import React from 'react';
import ReactDOM from 'react-dom';
import {Message} from './message';
import '../scss/styles.scss';
import '../css/styles.css';

export const init = () => {
    ReactDOM.render(
        <Message/>,
        document.getElementById('root')
    );
};

init();