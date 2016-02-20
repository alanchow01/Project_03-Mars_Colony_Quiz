import React from 'react';

//components
import Timer from './timer.jsx';
var question = {
    1: {question: 'this is a question',
        answer: ''},
    2: {question: '',
    answer: ''},
    3: {question: '',
    answer: ''}
}

var Questions = React.createClass({

  getInitialState: function() {
    return {
      start: false,
      showQuestions: false,
      question: 1,
      // questions: [ 'I am question 1', 'I am question 2', 'I am question 3' ],
      // answers: [ 'I am answer 1', 'I am answer 2', 'I am answer 3' ],
      currentQuestion: 0,
      correctAnswers: 0
    };
  },
  hidden: function(notHidden) {
    if(this.state.start !== notHidden) {
      return "hidden"
    } else {
      return ""
    }
  },
  handleClick: function() {
    this.setState({start: true})
  },
  // renderQuestions : function(questionToAsk, index) {
  //   return <MarsQuestions key = {index}
  //               id = {index}
  //               questionData = {questionToAsk}/>;
  // },
  generateQuestions: function() {
    return (<span>{question[this.state.question].question}</span>)
    // for i =0 question = dispaly(map[i])
    // return (
    //   this.state.questions.map(function(value, index) {
    //     return(<span>data={value},key={index}</span>);
    //   })
    // )
  },
  checkAnswer: function() {
    console.log('something');
  },
  render: function() {
    return (
      <div className="test-area">
        <div className = {"timer " + this.hidden(true)}>
          <Timer startMinutes = {0} startHandler = {this.state.start} />
        </div>
        <button type = "button" className = {"eval-start " + this.hidden(false)} onClick = {this.handleClick}> Start Exam </button>
        <form className={"questionaire " + this.hidden(true)}>
          <p>{this.generateQuestions()}</p>
          <input type="text" placeholder="enter here" />
          <button type="button" onClick = {this.checkAnswer}>Submit Answer</button>
        </form>
      </div>
    );
  }
});

// var MarsQuestions = React.createClass({
//     getInitialState: function() {
//       return {};
//     },
//     render: function() {
//       return (
//       )
//     }
// })

module.exports = Questions;
