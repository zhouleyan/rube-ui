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

const _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const Scroll = (function(_PureComponent) {
  (0, _inherits3.default)(Scroll, _PureComponent);

  function Scroll() {
    (0, _classCallCheck3.default)(this, Scroll);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).apply(
        this,
        arguments,
      ),
    );
  }

  (0, _createClass3.default)(Scroll, [
    {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(
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
})(_react.PureComponent);

exports.default = Scroll;
module.exports = exports.default;
