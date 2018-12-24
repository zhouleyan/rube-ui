import React from 'react';
import PropTypes from 'prop-types';

var Exception = function Exception(_ref) {
  var type = _ref.type;
  return React.createElement("div", null, "Exception: ", type);
};

process.env.NODE_ENV !== "production" ? Exception.propTypes = {
  type: PropTypes.string
} : void 0;
export default Exception;