import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { name, wide, color } = props;

  const wideStyle = {
    width: '49.7%',
    backgroundColor: color,
  };

  const normalStyle = {
    width: '24.7%',
    backgroundColor: color,
  };

  return <div style={wide ? wideStyle : normalStyle} className="button" onClick=""><span>{name}</span></div>;
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  wide: PropTypes.bool,
};

export default Button;
