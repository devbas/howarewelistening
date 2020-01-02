import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as graph from './Graph/reducer'
import * as countryList from './CountryList/reducer'
import * as story from './Story/reducer'
import * as loader from './Loader/reducer'
import * as slider from './Slider/reducer'

let middleware = [thunk]

if(process.env.NODE_ENV === 'development') {
	middleware = [...middleware, logger]
} else {
	middleware = [...middleware]
}

const combinedReducers = combineReducers(Object.assign({}, graph, countryList, story, loader, slider))
const store = createStore(combinedReducers, undefined, composeWithDevTools(applyMiddleware(...middleware)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
