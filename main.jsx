import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Browserhistory, Redirect } from 'react-router';

var MarsApp = React.createClass({
  getInitialState: function() {
    return {
      minutesElapsed: 5,
      secondsElapsed: Math.floor(this.minutesElapsed % 60)
    }
  },
  resetTimer: function() {
    clearInterval(this.interval);
    this.setState({ secondsElapsed: 0 });
    this.start();
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed <= 0) {
      clearInterval(this.interval);
    }
  },
  start: function() {
    this.interval = setInterval(this.tick, 100);
  },
  componentDidMount: function() {
    setTimeout(this.start, this.props.timeout);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>Mars</h1>
          <div className="shuttle">
            <i className="fa fa-space-shuttle"></i>
          </div>
        </div>
        <div className="test-area">
          <button className="eval-start">Begin Evaluation</button>
        </div>
      </div> {/*end wrapper*/}
        <div className="timer">
          <p>{this.state.minutesElapsed}:{this.state.secondsElapsed < 10 ? '0'+this.state.secondsElapsed : this.state.secondsElapsed}</p>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<MarsApp />, document.querySelector('#mars-mount'));
