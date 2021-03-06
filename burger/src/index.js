import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {compose} from 'redux';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
