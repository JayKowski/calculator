import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return <span>{name}</span>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
