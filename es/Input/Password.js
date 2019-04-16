import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from './Input';
import Icon from '../Icon';
import EyeSvg from './icons/EyeSvg';
import EyeClosedSvg from './icons/EyeClosedSvg';
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};

var Password =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Password, _PureComponent);

  function Password() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Password);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Password)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    });

    return _this;
  }

  _createClass(Password, [{
    key: "getIcon",
    value: function getIcon() {
      var _iconProps;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onChange), _defineProperty(_iconProps, "className", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "key", 'passwordIcon'), _defineProperty(_iconProps, "onMouseDown", function onMouseDown(e) {
        e.preventDefault();
      }), _iconProps);
      return React.createElement(Icon, _extends({}, iconProps, {
        component: !this.state.visible ? EyeSvg : EyeClosedSvg,
        viewBox: "0 0 24 24"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          prefixCls = _this$props2.prefixCls,
          inputPrefixCls = _this$props2.inputPrefixCls,
          size = _this$props2.size,
          suffix = _this$props2.suffix,
          visibilityToggle = _this$props2.visibilityToggle,
          restProps = _objectWithoutProperties(_this$props2, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "visibilityToggle"]);

      var suffixIcon = visibilityToggle && this.getIcon();
      var inputClassName = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));
      return React.createElement(Input, _extends({}, restProps, {
        type: this.state.visible ? 'text' : 'password',
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: suffixIcon
      }));
    }
  }]);

  return Password;
}(PureComponent);

_defineProperty(Password, "defaultProps", {
  inputPrefixCls: 'rube-input',
  prefixCls: 'rube-input-password',
  action: 'click',
  visibilityToggle: true
});

export default Password;