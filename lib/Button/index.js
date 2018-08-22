Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _jsx2 = require('babel-runtime/helpers/jsx');

const _jsx3 = _interopRequireDefault(_jsx2);

const _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

const _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

const _createClass2 = require('babel-runtime/helpers/createClass');

const _createClass3 = _interopRequireDefault(_createClass2);

const _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

const _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2,
);

const _inherits2 = require('babel-runtime/helpers/inherits');

const _inherits3 = _interopRequireDefault(_inherits2);

const _react = require('react');

const React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  const newObj = {};
  if (obj != null) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key))
        newObj[key] = obj[key];
    }
  }
  newObj.default = obj;
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const Button = (function(_React$PureComponent) {
  (0, _inherits3.default)(Button, _React$PureComponent);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Button.__proto__ || Object.getPrototypeOf(Button)).apply(
        this,
        arguments,
      ),
    );
  }

  (0, _createClass3.default)(Button, [
    {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(
          'div',
          {
            className: 'rube-button',
          },
          void 0,
          'Button',
        );
      },
    },
  ]);
  return Button;
})(React.PureComponent);

exports.default = Button;
module.exports = exports.default;
