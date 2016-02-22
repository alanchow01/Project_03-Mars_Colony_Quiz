import React from 'react';
import {browserHistory} from 'react-router';

var NotFound = React.createClass({
  notFound: function() {
    browserHistory.push('/welcome');
  },
  render: function() {
    return (
      <div className="test-area">
        <div className="narrative-box">
        <p>Whoops! The Martians have misplaced this page in the move.</p>
        <p><button onClick = {this.notFound}>Back To Welcome Screen</button></p>
      </div>
    </div>
    )
  }
})

module.exports = NotFound;
