import React from 'react';
import {browserHistory} from 'react-router';

var Success = React.createClass({
  takeTest: function() {
    browserHistory.push('/welcome');
  },
  render: function() {
    return (
      <div className="test-area">
        <div className="narrative-box">
        <h2>Success! You eagerly antipate all the potatoes you will be eating!</h2>
        <button onClick = {this.takeTest}>Test Again</button>
      </div>
    </div>
    )
  }
})

module.exports = Success;
