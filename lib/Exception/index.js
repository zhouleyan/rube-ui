"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Exception = function Exception(_ref) {
  var type = _ref.type;
  return (0, _jsx2["default"])("div", {}, void 0, "Exception: ", type);
};

var _default = Exception;
exports["default"] = _default;