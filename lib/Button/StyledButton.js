"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buttonStyles = _interopRequireDefault(require("./buttonStyles"));

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledButton",
  componentId: "wsdkf8-0"
})(["", ";"], _buttonStyles["default"]);

var _default = StyledButton;
exports["default"] = _default;