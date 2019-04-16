import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'; // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

export var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};

var Icon = function Icon(props) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      onKeyPress = props.onKeyPress,
      restProps = _objectWithoutProperties(props, ["className", "component", "viewBox", "rotate", "tabIndex", "onClick", "children", "onKeyPress"]);

  var innerNode = null;
  var classString = classNames({
    'rube-icon': true
  }, className);
  /* eslint-disable indent */

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  /* eslint-enable indent */

  var innerSvgProps = _objectSpread({}, svgBaseProps, {
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  if (Component) {
    innerNode = React.createElement(Component, innerSvgProps);
  }

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return React.createElement("i", _extends({}, restProps, {
    role: "button",
    tabIndex: iconTabIndex,
    onClick: onClick,
    onKeyPress: onKeyPress,
    className: classString
  }), innerNode);
};

export default Icon;