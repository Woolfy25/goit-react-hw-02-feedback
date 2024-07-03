import React from 'react';
import css from './FeedbackResults.module.css';
import PropTypes from 'prop-types';

const FeedbackResults = ({
  statusGood,
  statusNeutral,
  statusBad,
  total,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedbackResults}>
      <h2>Statistics</h2>
      <p>Good:{statusGood}</p>
      <p>Neutral:{statusNeutral}</p>
      <p>Bad:{statusBad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positiveFeedback}%</p>
    </div>
  );
};

FeedbackResults.propTypes = {
  statusGood: PropTypes.number.isRequired,
  statusNeutral: PropTypes.number.isRequired,
  statusBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default FeedbackResults;
