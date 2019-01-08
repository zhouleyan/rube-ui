"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RowContext = _interopRequireDefault(require("./RowContext"));

var responsiveArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

function Col(props) {
  var _classNames;

  var prefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      others = (0, _objectWithoutProperties2["default"])(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);
  var sizeClassObj = {};
  responsiveArray.forEach(function (size) {
    var _objectSpread2;

    var sizeProps = {};

    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if ((0, _typeof2["default"])(props[size]) === 'object') {
      sizeProps = props[size] || {};
    }

    delete others[size];
    sizeClassObj = (0, _objectSpread3["default"])({}, sizeClassObj, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2["default"])(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2["default"])(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2["default"])(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2["default"])(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _objectSpread2));
  });
  var classes = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), sizeClassObj);
  return (0, _jsx2["default"])(_RowContext["default"].Consumer, {}, void 0, function (_ref) {
    var gutter = _ref.gutter;
    var style = others.style;

    if (gutter > 0) {
      style = (0, _objectSpread3["default"])({
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2
      }, style);
    }

    return _react["default"].createElement("div", (0, _extends2["default"])({}, others, {
      style: style,
      className: classes
    }), _react.Children.toArray(children));
  });
}

Col.defaultProps = {
  prefixCls: 'rube-col'
};
var _default = Col;
exports["default"] = _default;