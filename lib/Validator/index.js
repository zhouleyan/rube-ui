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
// import './validator.css';

/* eslint-disable react/prefer-stateless-function */
const Validator = (function(_PureComponent) {
  (0, _inherits3.default)(Validator, _PureComponent);

  function Validator() {
    (0, _classCallCheck3.default)(this, Validator);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Validator.__proto__ || Object.getPrototypeOf(Validator)).apply(
        this,
        arguments,
      ),
    );
  }

  (0, _createClass3.default)(Validator, [
    {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(
          'div',
          {
            className: 'validator',
          },
          void 0,
          'Validator',
        );
      },
    },
  ]);
  return Validator;
})(_react.PureComponent);

exports.default = Validator;
module.exports = exports.default;
