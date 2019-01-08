"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _A = _interopRequireDefault(require("./A"));

var _StyledButton = _interopRequireDefault(require("./StyledButton"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */
function Button(props) {
  // Render an anchor tag
  var button = (0, _jsx2["default"])(_A["default"], {
    href: props.href,
    onClick: props.onClick
  }, void 0, _react.Children.toArray(props.children)); // If the Button has a handleRoute prop, we want to render a button

  if (props.handleRoute) {
    button = (0, _jsx2["default"])(_StyledButton["default"], {
      onClick: props.handleRoute
    }, void 0, _react.Children.toArray(props.children));
  }

  return (0, _jsx2["default"])(_Wrapper["default"], {}, void 0, button);
}

var _default = Button;
exports["default"] = _default;