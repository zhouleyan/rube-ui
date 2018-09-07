import React, { Component } from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function, no-console */
class BasicLayout extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>BasicLayout</div>;
  }
}

// BasicLayout.propTypes = {};

export default BasicLayout;
