"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.svgBaseProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
exports.svgBaseProps = svgBaseProps;

var Icon = function Icon(props) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      onKeyPress = props.onKeyPress,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "component", "viewBox", "rotate", "tabIndex", "onClick", "children", "onKeyPress"]);
  var innerNode = null;
  var classString = (0, _classnames["default"])({
    'rube-icon': true
  }, className);
  /* eslint-disable indent */

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  /* eslint-enable indent */

  var innerSvgProps = (0, _objectSpread2["default"])({}, svgBaseProps, {
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  if (Component) {
    innerNode = _react["default"].createElement(Component, innerSvgProps);
  }

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return _react["default"].createElement("i", (0, _extends2["default"])({}, restProps, {
    role: "button",
    tabIndex: iconTabIndex,
    onClick: onClick,
    onKeyPress: onKeyPress,
    className: classString
  }), innerNode);
};

var _default = Icon;
exports["default"] = _default;