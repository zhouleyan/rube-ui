"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _omit = _interopRequireDefault(require("omit.js"));

var _isNumeric = _interopRequireDefault(require("../_utils/isNumeric"));

var _ConfigProvider = require("../ConfigProvider");

var _Layout = require("./Layout");

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};
var SiderContext = (0, _react.createContext)({});
exports.SiderContext = SiderContext;

var generateID = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var InternalSider =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(InternalSider, _PureComponent);
  (0, _createClass2["default"])(InternalSider, null, [{
    key: "getDerivedStateFromProps",
    // 根据新的props更新state
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    } // mediaQueryList

  }]);

  function InternalSider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalSider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InternalSider).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mql", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uniqueID", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "responsiveHandler", function (mql) {
      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setCollapsed", function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggle", function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSider", function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          theme = _this$props.theme,
          collapsible = _this$props.collapsible,
          reverseArrow = _this$props.reverseArrow,
          trigger = _this$props.trigger,
          style = _this$props.style,
          width = _this$props.width,
          collapsedWidth = _this$props.collapsedWidth,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);
      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook']);
      var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? (0, _jsx2["default"])("span", {
        role: "button",
        tabIndex: "0",
        onClick: _this.toggle,
        onKeyPress: _this.toggle,
        className: "".concat(prefixCls, "-zero-width-trigger ").concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')
      }, void 0, "ZERO") : null;
      var iconObj = {
        expanded: reverseArrow ? '>' : '<',
        collapsed: reverseArrow ? '<' : '>'
      };
      var status = _this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      /* eslint-disable indent */

      var triggerDom = trigger !== null ? zeroWidthTrigger || (0, _jsx2["default"])("div", {
        className: "".concat(prefixCls, "-trigger"),
        role: "button",
        tabIndex: "0",
        onClick: _this.toggle,
        onKeyPress: _this.toggle,
        style: {
          width: siderWidth
        }
      }, void 0, trigger || defaultTrigger) : null;
      /* eslint-enable */

      var divStyle = (0, _objectSpread2["default"])({}, style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        // Fix width transition bug in IE11
        minWidth: siderWidth,
        // https://github.com/ant-design/ant-design/issues/6349
        width: siderWidth
      });
      var siderCls = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-collapsed"), !!_this.state.collapsed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-below"), !!_this.state.below), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return _react["default"].createElement("aside", (0, _extends2["default"])({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), (0, _jsx2["default"])("div", {
        className: "".concat(prefixCls, "-children")
      }, void 0, _this.props.children), collapsible || _this.state.below && zeroWidthTrigger ? triggerDom : null);
    });
    _this.uniqueID = generateID('rube-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      var _window = window;
      matchMedia = _window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMap[props.breakpoint], ")"));
    }

    var _collapsed;

    if ('collapsed' in props) {
      _collapsed = props.collapsed;
    } else {
      _collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: _collapsed
    };
    return _this;
  }

  (0, _createClass2["default"])(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueID);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return (0, _jsx2["default"])(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, void 0, (0, _jsx2["default"])(_ConfigProvider.ConfigConsumer, {}, void 0, this.renderSider));
    }
  }]);
  return InternalSider;
}(_react.PureComponent);

(0, _defineProperty2["default"])(InternalSider, "defaultProps", {
  // 是否可收起
  collapsible: false,
  // 默认是否收起
  defaultCollapsed: false,
  // 是否改变触发器箭头方向
  reverseArrow: false,
  // 宽度
  width: 200,
  // 收缩宽度
  collapsedWidth: 80,
  // 外部style
  style: {},
  // 主题
  theme: 'dark'
});

// Sider
var Sider = function Sider(props) {
  return (0, _jsx2["default"])(_Layout.LayoutContext.Consumer, {}, void 0, function (context) {
    return _react["default"].createElement(InternalSider, (0, _extends2["default"])({}, context, props));
  });
};

var _default = Sider;
exports["default"] = _default;