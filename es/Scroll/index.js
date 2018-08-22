import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

const Scroll = (function(_PureComponent) {
  _inherits(Scroll, _PureComponent);

  function Scroll() {
    _classCallCheck(this, Scroll);

    return _possibleConstructorReturn(
      this,
      (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).apply(
        this,
        arguments,
      ),
    );
  }

  _createClass(Scroll, [
    {
      key: 'render',
      value: function render() {
        return _jsx(
          'div',
          {
            className: 'scroll',
          },
          void 0,
          'Scroll',
        );
      },
    },
  ]);

  return Scroll;
})(PureComponent);

export default Scroll;
