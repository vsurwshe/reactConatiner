import React from 'react';
import ReactDOM from 'react-dom';
import './AppData/css/index.css';
import * as serviceWorker from './AppData/serviceWorker';
import Main from './App/component/Main';

ReactDOM.render(
<Main />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
