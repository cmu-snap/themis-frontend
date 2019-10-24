import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/theme.scss';
import './styles/index.scss';
import AppWithRouter from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <AppWithRouter />
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
