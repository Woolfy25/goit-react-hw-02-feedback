import React from 'react';
import css from './Title.module.css';
import PropTypes from 'prop-types';

const NoFeedback = ({ nofeedbacktext }) => {
  return <p className={css.noFeedbackcss}>{nofeedbacktext}</p>;
};

NoFeedback.propTypes = {
  nofeedbacktext: PropTypes.string.isRequired,
};

export default NoFeedback;
