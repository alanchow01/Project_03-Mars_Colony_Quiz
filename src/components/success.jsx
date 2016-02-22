import React from 'react';
import {browserHistory} from 'react-router';

var Success = React.createClass({
  componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 5000);
  },
  render: function() {
    return (
      <div className="test-area">
        <div className="narrative-box">
        <h2>Success!</h2>
        <p>You eagerly antipate all the potatoes you will be eating!</p>
        {/*<button onClick = {this.takeTest}>Test Again</button>*/}
      </div>
    </div>
    )
  }
})

module.exports = Success;
