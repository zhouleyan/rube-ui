import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
import RowContext from './RowContext';
var responsiveArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

function Col(props) {
  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      others = _objectWithoutProperties(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);
  /* eslint-disable react/prop-types */


  var renderCol = function renderCol(_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;
    var prefixCls = getPrefixCls('col', customizePrefixCls);
    var sizeClassObj = {};
    responsiveArray.forEach(function (size) {
      var _objectSpread2;

      var sizeProps = {};

      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (_typeof(props[size]) === 'object') {
        sizeProps = props[size] || {};
      }

      delete others[size];
      sizeClassObj = _objectSpread({}, sizeClassObj, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), _defineProperty(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), _defineProperty(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), _defineProperty(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), _defineProperty(_objectSpread2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _objectSpread2));
    });
    var classes = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), _defineProperty(_classNames, "".concat(prefixCls, "-order-").concat(order), order), _defineProperty(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), _defineProperty(_classNames, "".concat(prefixCls, "-push-").concat(push), push), _defineProperty(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
    return _jsx(RowContext.Consumer, {}, void 0, function (_ref2) {
      var gutter = _ref2.gutter;
      var style = others.style;

      if (gutter > 0) {
        style = _objectSpread({
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2
        }, style);
      }

      return React.createElement("div", _extends({}, others, {
        style: style,
        className: classes
      }), children);
    });
  };
  /* eslint-enable react/prop-types */


  return _jsx(ConfigConsumer, {}, void 0, renderCol);
}

export default Col;