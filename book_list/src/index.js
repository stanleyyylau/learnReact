import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';

// This gets all the reducers, which will in turn return the application state
import reducers from './reducers';


// Provider is provided by react-redux, this is how you hook them up
// store={createStore(reducers)} I think this sets the store property of Provider to the
// Application state, createStore is provided by redux, and the function will return a 'store'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
