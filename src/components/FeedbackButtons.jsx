import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackButtons.module.css';

const FeedbackButtons = ({ first, second, last, onGood, onNeutral, onBad }) => {
  return (
    <div className={css.leaveFeedbackDiv}>
      <button onClick={onGood}>{first}</button>
      <button onClick={onNeutral}>{second}</button>
      <button onClick={onBad}>{last}</button>
    </div>
  );
};

FeedbackButtons.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};

export default FeedbackButtons;
