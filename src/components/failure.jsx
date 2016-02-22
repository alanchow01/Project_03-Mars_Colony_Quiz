import React from 'react';
import {browserHistory} from 'react-router';

var Success = React.createClass({
  componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 10000);
    },
    render: function() {
      return (
        <div className="test-area failure">
          <div className="results-msg">
            <h2 className="rejected">Rejected!</h2>
            <p>You watch forlornly at a distance as the colony ship takes off.</p>
          </div>
        </div>
      )
    }
  })
  
  module.exports = Success;
