// import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Render = props => {
  const { render } = props;
  return render(props);
};

Render.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Render;
