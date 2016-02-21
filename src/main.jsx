import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect } from 'react-router';

//Components
import WelcomeScreen from './components/welcome-screen.jsx';
import Questions from './components/questions.jsx';
import NotFound from './components/404.jsx';
import Success from './components/success.jsx';
import Failure from './components/failure.jsx';

var MarsApp = React.createClass({
  render: function(){
    return (
      <Router history = { browserHistory }>
        <Redirect from = "/" to = "/welcome" />
        <Route path = "/welcome" component = {WelcomeScreen} />
        <Route path = "/mars-test" component = {Questions} />
        <Route path = "/success" component = {Success} />
        <Route path = "/failure" component = {Failure} />
        <Route path = "*" component = {NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<MarsApp />, document.querySelector('#mars-mount'));
