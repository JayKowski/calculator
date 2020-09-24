import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { name, wide, color } = props;

  const wideStyle = {
    flexBasis: '50%',
    backgroundColor: color,
  };

  const normalStyle = {
    flexBasis: '25%',
    backgroundColor: color,
  };

  return <div style={wide ? wideStyle : normalStyle} className="button">{name}</div>;
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export default Button;
