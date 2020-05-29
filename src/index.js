import _ from 'lodash';
import '../scss/styles.scss';
import '../css/styles.css';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
};

document.body.appendChild(component());