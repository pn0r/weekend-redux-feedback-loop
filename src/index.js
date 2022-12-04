import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const FeelingsReducer = (state = '', action) => {
  if (action.type === 'NEW_FEELING') {
    console.log('feelingReducer', action.payload);
    return action.payload;
  }else if(action.type === 'CLEAR') {
    return '';
  }
    return state;
} 

const UnderstandingReducer = (state = '', action) => {
  if (action.type === 'NEW_UNDERSTANDING') {
    return action.payload;
  }else if(action.type === 'CLEAR') {
    return '';
  }
    return state;
} 

const SupportReducer = (state = '', action) => {
  if (action.type === 'NEW_SUPPORT') {
    return action.payload;
  }else if(action.type === 'CLEAR') {
    return '';
  }
    return state;
} 

const CommentReducer = (state = '', action) => {
  if (action.type === 'NEW_COMMENT') {
    return action.payload;
  }else if(action.type === 'CLEAR') {
    return '';
  }
    return state;
} 


const storeInstance = createStore(
    combineReducers({
      FeelingsReducer,
      SupportReducer,
      UnderstandingReducer,
      CommentReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
