import React from 'react';
import css from './Feedback.module.css';
import Title from './Title';
import FeedbackButtons from './FeedbackButtons';
import NoFeedback from './NoFeedback';
import FeedbackResults from './FeedbackResults';

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
      <div className={css.feedbackContainer}>
        <div className={css.leaveFeedback}>
          <Title title={'Please leave feedback'} />
          <FeedbackButtons
            first="Good"
            second="Neutral"
            last="Bad"
            onGood={this.changeStateGood}
            onNeutral={this.changeStateNeutral}
            onBad={this.changeStateBad}
          />
        </div>
        {hasFeedback ? (
          <FeedbackResults
            statusGood={this.state.good}
            statusNeutral={this.state.neutral}
            statusBad={this.state.bad}
            total={this.state.bad + this.state.neutral + this.state.good}
            positiveFeedback={positivePercentage}
          />
        ) : (
          <NoFeedback nofeedbacktext={'There is no feedback'} />
        )}
      </div>
    );
  }
}

export default Feedback;
