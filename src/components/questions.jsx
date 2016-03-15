import React from 'react';
import {browserHistory} from 'react-router';

//components
import Timer from './timer.jsx';

var currentQuestion = {
  1: {
    question: 'What is the answer to life the universe and everything?',
    answer: '42'
  },
  2: {
    question: 'How many moons does Mars have?',
    answer: '2'
  },
  3: {
    question: 'How many centimetres are in a metre?',
    answer: '100'
  },
  4: {
    question: '',
    answer: ''
  }
};

var Questions = React.createClass({

  getInitialState: function() {
    return {
      start: false,
      showQuestions: false,
      currentQuestion: 1,
      correctAnswers: 0,
      value: ''
    };
  },
  hidden: function(notHidden) {
    if(this.state.start !== notHidden) {
      return "hidden";
    } else {
      return "";
    }
  },
  handleClick: function() {
    this.setState({start: true});
  },
  generateQuestions: function() {
    return (<span>{currentQuestion[this.state.currentQuestion].question}</span>);
  },
  formSubmit: function(e) {
    e.preventDefault();
    this.setState({value: this.refs.userAnswer.value});
    this.setState({currentQuestion: this.state.currentQuestion + 1});
    if (this.refs.userAnswer.value === currentQuestion[this.state.currentQuestion].answer) {
      this.setState({correctAnswers: this.state.correctAnswers + 1})
    };
    this.refs.userAnswer.value = '';
  },
  testResults: function () {
    if (this.state.correctAnswers === 3 ) {
      browserHistory.push('/success');
    } else {
      browserHistory.push('/failure');
    }
  },
  componentDidUpdate: function() {
    if (this.state.currentQuestion > 3){
      this.setState({start: false});
      this.testResults();
    };
  },
  componentWillReceiveProps: function(){
    if(status.timerStatus === 0){
      browserHistory.push('/failure');
    };
  },
  render: function() {
    return (
      <div className="test-area training">
        <div className = {"timer " + this.hidden(true)}>
          <Timer startMinutes={0} startHandler={this.state.start}  quizNum={this.state.correctAnswers}/>
        </div>
        <div className={"narrative-box " + this.hidden(false)}>
          <p>To secure your seat on the colony ship, you must correctly answer three questions.</p>
          <p> If you're ready, click the button below to start</p>
          <button type="button" className={"eval-start " + this.hidden(false)} onClick={this.handleClick}> Begin Evaluation </button>
        </div>
        <div className={"narrative-box " + this.hidden(true)}>
          <form>
            <p>{this.generateQuestions()}</p>
            <input className="input-answer" ref="userAnswer" type="text" placeholder="Enter your answer"/>
            <button type="button" onClick = {this.formSubmit}>Submit Answer</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Questions;
