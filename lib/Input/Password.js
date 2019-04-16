"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _EyeSvg = _interopRequireDefault(require("./icons/EyeSvg"));

var _EyeClosedSvg = _interopRequireDefault(require("./icons/EyeClosedSvg"));

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};

var Password =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Password, _PureComponent);

  function Password() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Password);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Password)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function () {
      _this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Password, [{
    key: "getIcon",
    value: function getIcon() {
      var _iconProps;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconProps = (_iconProps = {}, (0, _defineProperty2["default"])(_iconProps, iconTrigger, this.onChange), (0, _defineProperty2["default"])(_iconProps, "className", "".concat(prefixCls, "-icon")), (0, _defineProperty2["default"])(_iconProps, "key", 'passwordIcon'), (0, _defineProperty2["default"])(_iconProps, "onMouseDown", function onMouseDown(e) {
        e.preventDefault();
      }), _iconProps);
      return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({}, iconProps, {
        component: !this.state.visible ? _EyeSvg["default"] : _EyeClosedSvg["default"],
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
          restProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "visibilityToggle"]);
      var suffixIcon = visibilityToggle && this.getIcon();
      var inputClassName = (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), !!size));
      return _react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, restProps, {
        type: this.state.visible ? 'text' : 'password',
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: suffixIcon
      }));
    }
  }]);
  return Password;
}(_react.PureComponent);

(0, _defineProperty2["default"])(Password, "defaultProps", {
  inputPrefixCls: 'rube-input',
  prefixCls: 'rube-input-password',
  action: 'click',
  visibilityToggle: true
});
var _default = Password;
exports["default"] = _default;