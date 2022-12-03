import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const feedBackReducer = (state = [], action) => {
    console.log('feddbackreducer', action .payload)
    return state;
} 


const storeInstance = createStore(
    combineReducers({
      feedBackReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
