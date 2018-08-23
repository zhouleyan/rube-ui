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

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
var Button = function (_React$PureComponent) {
  (0, _inherits3["default"])(Button, _React$PureComponent);

  function Button() {
    (0, _classCallCheck3["default"])(this, Button);
    return (0, _possibleConstructorReturn3["default"])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  (0, _createClass3["default"])(Button, [{
    key: "render",
    value: function render() {
      return (0, _jsx3["default"])("div", {
        className: "rube-button"
      }, void 0, "Button");
    }
  }]);
  return Button;
}(React.PureComponent);

exports["default"] = Button;
module.exports = exports["default"];