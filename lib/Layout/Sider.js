"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isNumeric = _interopRequireDefault(require("../_utils/isNumeric"));

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
var SiderContext = (0, _react.createContext)({
  siderCollapsed: false,
  collapsedWidth: 80
});
exports.SiderContext = SiderContext;

var Sider =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Sider, _PureComponent);
  (0, _createClass2["default"])(Sider, null, [{
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

  function Sider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Sider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Sider).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "mql", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "responsiveHandler", function (mql) {
      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "setCollapsed", function (collapsed, type) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "toggle", function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    });
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

  (0, _createClass2["default"])(Sider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          isCollapsed = _this$props.isCollapsed,
          width = _this$props.width,
          collapsible = _this$props.collapsible,
          collapsedWidth = _this$props.collapsedWidth,
          reverseArrow = _this$props.reverseArrow,
          trigger = _this$props.trigger,
          style = _this$props.style,
          children = _this$props.children;
      var collapsed = this.state.collapsed;
      var Provider = SiderContext.Provider;
      var contextValue = {
        siderCollapsed: collapsed,
        collapsedWidth: collapsedWidth
      };
      var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      var classes = (0, _classnames["default"])(className, prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-zero-width"), !siderWidth), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-collapsed"), isCollapsed), _classNames));
      var iconObj = {
        expanded: reverseArrow ? '>' : '<',
        collapsed: reverseArrow ? '<' : '>'
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDOM = trigger !== null ? (0, _jsx2["default"])("div", {
        role: "button",
        tabIndex: "0",
        className: "".concat(prefixCls, "-trigger"),
        style: {
          width: siderWidth
        },
        onClick: this.toggle,
        onKeyPress: this.toggle
      }, void 0, trigger || defaultTrigger) : null;
      var wrapStyles = (0, _objectSpread2["default"])({}, style, {
        width: "".concat(siderWidth),
        minWidth: "".concat(siderWidth),
        maxWidth: "".concat(siderWidth),
        flex: "0 0 ".concat(siderWidth)
      });
      return (0, _jsx2["default"])("div", {
        className: classes,
        style: wrapStyles
      }, void 0, (0, _jsx2["default"])("div", {
        className: "".concat(prefixCls, "-children")
      }, void 0, (0, _jsx2["default"])(Provider, {
        value: contextValue
      }, void 0, _react.Children.toArray(children))), collapsible ? triggerDOM : null);
    }
  }]);
  return Sider;
}(_react.PureComponent);

(0, _defineProperty2["default"])(Sider, "defaultProps", {
  // 类前缀
  prefixCls: 'rube-layout-sider',
  // 侧栏是否收起
  isCollapsed: true,
  // 宽度
  width: 200,
  // 是否可收起
  collapsible: false,
  // 收缩宽度
  collapsedWidth: 80,
  // 外部style
  style: {},
  // 默认是否收起
  defaultCollapsed: false,
  // 是否改变触发器箭头方向
  reverseArrow: false
});
Sider.Context = SiderContext;
var _default = Sider;
exports["default"] = _default;