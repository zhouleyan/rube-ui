import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Children, PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNumeric from '../_utils/isNumeric';

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
export var SiderContext = createContext({
  siderCollapsed: false,
  collapsedWidth: 80
});

var Sider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Sider, _PureComponent);

  _createClass(Sider, null, [{
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

    _classCallCheck(this, Sider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mql", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "responsiveHandler", function (mql) {
      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCollapsed", function (collapsed, type) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
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

  _createClass(Sider, [{
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

      var siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      var classes = classNames(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-zero-width"), !siderWidth), _defineProperty(_classNames, "".concat(prefixCls, "-collapsed"), isCollapsed), _classNames));
      var iconObj = {
        expanded: reverseArrow ? '>' : '<',
        collapsed: reverseArrow ? '<' : '>'
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDOM = trigger !== null ? _jsx("div", {
        role: "button",
        tabIndex: "0",
        className: "".concat(prefixCls, "-trigger"),
        style: {
          width: siderWidth
        },
        onClick: this.toggle,
        onKeyPress: this.toggle
      }, void 0, trigger || defaultTrigger) : null;

      var wrapStyles = _objectSpread({}, style, {
        width: "".concat(siderWidth),
        minWidth: "".concat(siderWidth),
        maxWidth: "".concat(siderWidth),
        flex: "0 0 ".concat(siderWidth)
      });

      return _jsx("div", {
        className: classes,
        style: wrapStyles
      }, void 0, _jsx("div", {
        className: "".concat(prefixCls, "-children")
      }, void 0, _jsx(Provider, {
        value: contextValue
      }, void 0, Children.toArray(children))), collapsible ? triggerDOM : null);
    }
  }]);

  return Sider;
}(PureComponent);

_defineProperty(Sider, "defaultProps", {
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
export default Sider;