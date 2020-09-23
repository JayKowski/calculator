/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { name, wide, color, onClick } = props;
  const handleClick = e => onClick(e.target.innerText);
  const wideStyle = {
    width: '49.7%',
    backgroundColor: color,
  };

  const normalStyle = {
    width: '24.7%',
    backgroundColor: color,
  };

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div style={wide ? wideStyle : normalStyle} className="button" onClick={handleClick}>{name}</div>;
}

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
