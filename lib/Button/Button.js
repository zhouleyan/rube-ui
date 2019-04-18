"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfigProvider = require("../ConfigProvider");

var _BtnLoadingSvg = _interopRequireDefault(require("./icons/BtnLoadingSvg"));

var Button =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Button, _Component);
  (0, _createClass2["default"])(Button, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof nextProps.loading === 'boolean') {
        return (0, _objectSpread2["default"])({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  // buttonNode;
  function Button(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Button);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Button).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "delayTimeout", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!loading) {
        if (onClick) {
          onClick(e);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderButton", function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          type = _this$props.type,
          className = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          _loadingProp = _this$props.loading,
          block = _this$props.block,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "type", "className", "children", "icon", "loading", "block"]);
      var loading = _this.state.loading;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var btnIcon = icon;
      var iconNode = loading ? _BtnLoadingSvg["default"] : btnIcon;
      /* eslint-disable indent */

      var kids = children || children === 0 ? _react["default"].Children.map(children, function (child) {
        if (typeof child === 'string') {
          return (0, _jsx2["default"])("span", {}, void 0, child);
        }

        return child;
      }) : null;
      /* eslint-enable indent */

      var htmlType = rest.htmlType,
          otherProps = (0, _objectWithoutProperties2["default"])(rest, ["htmlType"]);
      /* eslint-disable react/button-has-type */

      return _react["default"].createElement("button", (0, _extends2["default"])({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick // ref={this.saveButtonRef}

      }), iconNode, kids);
      /* eslint-enable react/button-has-type */
    });
    _this.state = {
      loading: props.loading
    };
    return _this;
  }

  (0, _createClass2["default"])(Button, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    } // saveButtonRef = node => {
    //   this.buttonNode = node;
    // };

  }, {
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])(_ConfigProvider.ConfigConsumer, {}, void 0, this.renderButton);
    }
  }]);
  return Button;
}(_react.Component);

(0, _defineProperty2["default"])(Button, "defaultProps", {
  icon: null,
  loading: false,
  htmlType: 'button',
  block: false
});
var _default = Button;
exports["default"] = _default;