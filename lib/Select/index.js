"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {}, void 0, "Select");

// import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
var Select =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Select, _PureComponent);

  function Select() {
    (0, _classCallCheck2["default"])(this, Select);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Select).apply(this, arguments));
  }

  (0, _createClass2["default"])(Select, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);
  return Select;
}(_react.PureComponent);

var _default = Select;
exports["default"] = _default;