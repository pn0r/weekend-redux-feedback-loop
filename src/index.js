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
  }
    return state;
} 

const UnderstandingReducer = (state = '', action) => {
  if (action.type === 'NEW_UNDERSTANDING') {
    console.log('understandingReducer', action.payload);
    return action.payload;
  }
    return state;
} 

const SupportReducer = (state = '', action) => {
  if (action.type === 'NEW_SUPPORT') {
    console.log('supportReducer', action.payload);
    return action.payload;
  }
    return state;
} 

const CommentReducer = (state = '', action) => {
  if (action.type === 'NEW_COMMENT') {
    console.log('commentReducer', action.payload);
    return action.payload;
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
