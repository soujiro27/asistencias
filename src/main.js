import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import app from './reducers/index'
import App from './containers/app'
import './main.css'

let store = createStore(app,applyMiddleware(thunk,promise))
let root = document.getElementById('root');



render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
)


