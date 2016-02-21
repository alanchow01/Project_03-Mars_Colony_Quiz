import React from 'react';
import {browserHistory} from 'react-router';

var WelcomeScreen = React.createClass({
  takeTest: function() {
    browserHistory.push('/mars-test');
  },
  render: function() {
    return (
      <div className="test-area">
        {/*<div className="eval-start">*/}
          <div className="narrative-box">
            <p>Welcome traveller, you have been selected as a potential future colonist of Mars.</p>
            <p>We hope you like potatoes!</p>
        <button onClick = {this.takeTest}>Click to continue</button>
        </div>
      {/*</div>*/}
      </div>
    )
  }
})

module.exports = WelcomeScreen;
