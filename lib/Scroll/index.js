"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
var Scroll = function (_PureComponent) {
  (0, _inherits3["default"])(Scroll, _PureComponent);

  function Scroll() {
    (0, _classCallCheck3["default"])(this, Scroll);
    return (0, _possibleConstructorReturn3["default"])(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).apply(this, arguments));
  }

  (0, _createClass3["default"])(Scroll, [{
    key: "render",
    value: function render() {
      return (0, _jsx3["default"])("div", {
        className: "scroll"
      }, void 0, "Scroll");
    }
  }]);
  return Scroll;
}(_react.PureComponent);

exports["default"] = Scroll;
module.exports = exports["default"];