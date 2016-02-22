import React from 'react';
import {browserHistory} from 'react-router';

var Success = React.createClass({
    componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 240000);
    },
    render: function() {
      return (
        <div className="test-area star-field">
          <div className="launch"><i className="fa fa-space-shuttle"></i></div>
          <div className="results-msg">
            <h2>Accepted!</h2>
            <p>You eagerly anticipate all the potatoes you will be eating!</p>
          </div>
          <div id="success">
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
          </div>
        </div>
      )
    }
  })

  module.exports = Success;
