"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Layout = _interopRequireDefault(require("./Layout"));

var _Sider = _interopRequireDefault(require("./Sider"));

_Layout["default"].Sider = _Sider["default"];
var _default = _Layout["default"];
exports["default"] = _default;