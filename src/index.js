import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// ~~~~~~~~ REDUCERS ~~~~~~~

//Gonna try to do a switch instead of separate reducers
const answers = (state = {}, action) => {
    console.log('in answers switch reducer');
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feelingAnswer: action.payload}
        case 'SET_UNDERSTAND':
            return {...state, understandAnswer: action.payload}
        case 'SET_SUPPORT':
            return {...state, supportAnswer: action.payload}
        case 'SET_COMMENT':
            return {...state, commentAnswer: action.payload}
        case 'DELETE_ANSWERS':
            return {}
    }
    return state;
}

// ~~~~~~~~ STORE ~~~~~~~

const store = createStore(
    combineReducers({ answers }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
