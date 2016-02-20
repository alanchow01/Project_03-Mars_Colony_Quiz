import React from 'react';

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
  secondsLeft: function() {
    return Math.floor(this.state.secondsElapsed % 60);
  },
  minutesLeft: function() {
    return Math.floor(this.state.secondsElapsed / 60);
  },
  stopTimer: function() {
    clearInterval(this.interval);
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed === 0) {
      alert('YOU FAIL!')
      this.stopTimer();
    }
  },
  start: function() {
    // this.setState(this.getInitialState());
    this.interval = setInterval(this.tick, 100);
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.startHandler === true){
      this.start();
    }
  },
  render: function() {
    return (
      <div>
        <p>{this.minutesLeft()}:{this.secondsLeft() < 10 ? '0'+this.secondsLeft() : this.secondsLeft()}</p>
      </div>
    )
  }
});

module.exports = Timer;
