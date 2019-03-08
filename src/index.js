import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import {connect, Provider } from 'react-redux'
import {createStore} from 'redux';
import 'tachyons';
import './index.css';
import App from './containers/App';
import {searchRobots} from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
