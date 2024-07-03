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
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
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
    const { good, neutral, bad, hasFeedback } = this.state;
    return (
      <div className={css.feedbackContainer}>
        <div className={css.leaveFeedback}>
          <Title title={'Please leave feedback'} />
          <FeedbackButtons
            first="Good"
            second="Neutral"
            last="Bad"
            onGood={() => this.handleFeedback('good')}
            onNeutral={() => this.handleFeedback('neutral')}
            onBad={() => this.handleFeedback('bad')}
          />
        </div>
        {hasFeedback ? (
          <FeedbackResults
            statusGood={good}
            statusNeutral={neutral}
            statusBad={bad}
            total={bad + neutral + good}
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
