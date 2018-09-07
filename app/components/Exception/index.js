import React from 'react';
import PropTypes from 'prop-types';

const Exception = ({ type }) => <div>Exception: {type}</div>;

Exception.propTypes = {
  type: PropTypes.string,
};

export default Exception;
