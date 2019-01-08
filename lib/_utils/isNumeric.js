"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isNumeric = function isNumeric(value) {
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
};

var _default = isNumeric;
exports["default"] = _default;