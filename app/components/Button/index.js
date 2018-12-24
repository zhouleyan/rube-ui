import * as React from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
export default class Button extends React.PureComponent {
  state = {
    a: '123',
  };

  render() {
    const { a } = this.state;
    return <div className="rube-button">{a}</div>;
  }
}

Button.propTypes = {};
