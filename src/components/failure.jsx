import React from 'react';
import {browserHistory} from 'react-router';

var Failure = React.createClass({
  componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 5000);
  },
  render: function() {
    return (
      <div className="test-area">
        <div className="narrative-box">
        <h2>Failure!</h2>
          <p>You watch forlornly as the colonists lift-off</p>
        {/*<button onClick = {this.takeTest}>Test Again</button>*/}
      </div>
    </div>
    )
  }
})

module.exports = Failure;
