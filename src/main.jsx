import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Questions from './components/questions.jsx';
import Welcome from './components/welcome-screen.jsx';
import NotFound from './components/404.jsx';
import Rejected from './components/failure.jsx';
import Accepted from './components/success.jsx';

var MarsApp = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/mars-test' component={Questions} />
        <Route path='/success' component={Accepted} />
        <Route path='/failure' component={Rejected} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }

});


ReactDOM.render(<MarsApp />, document.querySelector('#mars-mount'));
