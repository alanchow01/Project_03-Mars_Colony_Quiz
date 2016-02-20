import React from 'react';
import {browserHistory} from 'react-router';

var WelcomeScreen = React.createClass({
  takeTest: function() {
    browserHistory.push('/mars-test');
  },
  render: function() {
    return (
      <div className="test-area">
        <button onClick = {this.takeTest}>Take Test</button>
      </div>
    )
  }
})

module.exports = WelcomeScreen;
