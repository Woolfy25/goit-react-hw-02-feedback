import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      hasFeedback: false,
    };
    this.changeStateGood = this.changeStateGood.bind(this);
    this.changeStateNeutral = this.changeStateNeutral.bind(this);
    this.changeStateBad = this.changeStateBad.bind(this);
  }

  changeStateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      hasFeedback: true,
    }));
  };
  changeStateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      hasFeedback: true,
    }));
  };
  changeStateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      hasFeedback: true,
    }));
  };

  calculatePositivePercentage = () => {
    const { good, bad } = this.state;
    const totalFeedback = good + bad;
    return totalFeedback === 0 ? 0 : ((good / totalFeedback) * 100).toFixed(2);
  };

  render() {
    const positivePercentage = this.calculatePositivePercentage();
    const { hasFeedback } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button onClick={this.changeStateGood}>Good</button>
          <button onClick={this.changeStateNeutral}>Neutral</button>
          <button onClick={this.changeStateBad}>Bad</button>
        </div>
        {hasFeedback ? (
          <div>
            <h2>Statistics</h2>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:{this.state.bad + this.state.neutral + this.state.good}</p>
            <p>Positive feedback:{positivePercentage}%</p>
          </div>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Feedback;
