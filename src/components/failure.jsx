import React from 'react';
import {browserHistory} from 'react-router';

var Failure = React.createClass({
  takeTest: function() {
    browserHistory.push('/welcome');
  },
  componentDidMount: function() {
    return ( "failure" )
  },
  render: function() {
    return (
      <div className={"test-area " + this.componentDidMount()}>
        <div className="narrative-box">
        <h2>Failure! You watch forlornly as the colonists lift-off</h2>
        <button onClick = {this.takeTest}>Test Again</button>
      </div>
    </div>
    )
  }
})

module.exports = Failure;
