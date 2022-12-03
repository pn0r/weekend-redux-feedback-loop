import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import UserFeelings from '../UserFeelings/UserFeelings';
import UserUnderstanding from '../UserUnderstanding/UserUnderstanding';
import UserSupport from '../UserSupport/UserSuppport';
import UserComment from '../UserComment/UserComment';
import UserReview from '../UserReview/UserReview';
import SubmitSucces from '../SubmitSuccess/SubmitSucces';


function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path="/">
          <UserFeelings />
        </Route>
        <Route exact path="/UserUnderstanding">
          <UserUnderstanding />
        </Route>
        <Route exact path="/UserSupport">
          <UserSupport />
        </Route>
        <Route exact path="/UserComment">
          <UserComment />
        </Route>
        <Route exact path="/UserReview">
          <UserReview />
        </Route>
        <Route exact path="/SubmitSucces">
          <SubmitSucces />
        </Route>
      </Router>
    </div>
  );
}

export default App;
