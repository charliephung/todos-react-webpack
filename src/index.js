import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import app reducer
import appReducers from "./reducers/index";
// Asyn actions
import thunk from "redux-thunk";
// Add boostrap
import "bootstrap3/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap3/dist/js/bootstrap.min.js";


// Create store
const store = createStore(
    appReducers,
    // Dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    // Connect app to store
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
