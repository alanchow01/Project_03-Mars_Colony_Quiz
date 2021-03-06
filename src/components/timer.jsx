import React from 'react';
import {browserHistory} from 'react-router';

var Timer = React.createClass({
  getInitialState: function() {
    var seconds = this.getSeconds();
    return {
      secondsElapsed: seconds,
    };
  },
  getSeconds: function() {
    if(this.props.startMinutes >=1) {
      return this.props.startMinutes * 60;
    } else {
      return 60;
    }
  },
  minutesLeft: function() {
    return Math.floor(this.state.secondsElapsed / 60);
  },
  secondsLeft: function() {
    return Math.floor(this.state.secondsElapsed % 60);
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed === 0) {
      this.componentWillUnmount
      browserHistory.push('/failure');
    };
  },
  startTimer: function() {
    if (!this.interval) {
      this.interval = setInterval(this.tick, 1000);
    }
  },
  stopTimer: function() {
    clearInterval(this.interval);
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.startHandler === true){
      this.startTimer();
    } else {
      this.stopTimer();
    };
  },
  componentDidMount: function(){
    setTimeout(this.start, 0);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <p>{this.minutesLeft()}:{this.secondsLeft() < 10 ? '0' + this.secondsLeft() : this.secondsLeft()}</p>
      </div>
    )
  }
});

module.exports = Timer;
