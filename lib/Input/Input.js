"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfigProvider = require("../ConfigProvider");

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear);
}

var Input =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Input, _PureComponent);
  (0, _createClass2["default"])(Input, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Input).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "input", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveInput", function (node) {
      _this.input = node;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      _this.setValue(e.target.value, e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderComponent", function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var customizePrefixCls = _this.props.prefixCls;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      return _this.renderLabeledInput(prefixCls, _this.renderInput(prefixCls));
    });
    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
    key: "getInputClassName",
    value: function getInputClassName(prefixCls) {
      var _classNames;

      var _this$props2 = this.props,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          hasError = _this$props2.hasError;
      return (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-error"), hasError), _classNames));
    }
  }, {
    key: "setValue",
    value: function setValue(value, e, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }

      var onChange = this.props.onChange;

      if (onChange) {
        var event = e;

        if (e.type === 'click') {
          // click clear icon
          event = Object.create(e);
          event.target = this.input;
          event.currentTarget = this.input;
          var originalInputValue = this.input.value; // change input value cause e.target.value should be '' when clear input

          this.input.value = '';
          onChange(event); // reset input value

          this.input.value = originalInputValue;
          return;
        }

        onChange(event);
      }
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props3 = this.props,
          suffix = _this$props3.suffix,
          allowClear = _this$props3.allowClear;

      if (suffix || allowClear) {
        return (0, _jsx2["default"])("span", {
          className: "".concat(prefixCls, "-suffix")
        }, void 0, suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledInput",
    value: function renderLabeledInput(prefixCls, children) {
      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter; // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return children;
      }

      return children;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, children) {
      var _classNames2;

      var props = this.props;
      var suffix = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(props)) {
        return children;
      }

      var prefix = props.prefix ? (0, _jsx2["default"])("span", {
        className: "".concat(prefixCls, "-prefix")
      }, void 0, props.prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])(props.className, "".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), _classNames2));
      return (0, _jsx2["default"])("span", {
        className: affixWrapperCls,
        style: props.style
      }, void 0, prefix, _react["default"].cloneElement(children, {
        style: null,
        className: this.getInputClassName(prefixCls)
      }), suffix);
    }
  }, {
    key: "renderInput",
    value: function renderInput(prefixCls) {
      var _this$props5 = this.props,
          className = _this$props5.className,
          addonBefore = _this$props5.addonBefore,
          addonAfter = _this$props5.addonAfter;
      var value = this.state.value; // Parent props

      var otherProps = (0, _omit["default"])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', 'defaultValue', 'hasError']);
      return this.renderLabeledIcon(prefixCls, _react["default"].createElement("input", (0, _extends2["default"])({}, otherProps, {
        value: fixControlledValue(value),
        onChange: this.handleChange,
        className: (0, _classnames["default"])(this.getInputClassName(prefixCls), (0, _defineProperty2["default"])({}, className, className && !addonBefore && !addonAfter)),
        onKeyDown: this.handleKeyDown,
        ref: this.saveInput
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])(_ConfigProvider.ConfigConsumer, {}, void 0, this.renderComponent);
    }
  }]);
  return Input;
}(_react.PureComponent);

(0, _defineProperty2["default"])(Input, "defaultProps", {
  type: 'text',
  disabled: false,
  hasError: false
});
var _default = Input;
exports["default"] = _default;