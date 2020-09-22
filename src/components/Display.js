import React from 'react';
import './Display.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div className="result-dis">
      <div className="res-text">{result}</div>
    </div>
  );
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
