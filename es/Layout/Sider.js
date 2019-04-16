import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import isNumeric from '../_utils/isNumeric';
import { ConfigConsumer } from '../ConfigProvider';
import { LayoutContext } from './Layout';

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
export var SiderContext = createContext({});

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
  _inherits(InternalSider, _PureComponent);

  _createClass(InternalSider, null, [{
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

    _classCallCheck(this, InternalSider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InternalSider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "mql", void 0);

    _defineProperty(_assertThisInitialized(_this), "uniqueID", void 0);

    _defineProperty(_assertThisInitialized(_this), "responsiveHandler", function (mql) {
      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setCollapsed", function (collapsed, type) {
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

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    });

    _defineProperty(_assertThisInitialized(_this), "renderSider", function (_ref) {
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
          others = _objectWithoutProperties(_this$props, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);

      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = omit(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook']);
      var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? _jsx("span", {
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

      var triggerDom = trigger !== null ? zeroWidthTrigger || _jsx("div", {
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

      var divStyle = _objectSpread({}, style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        // Fix width transition bug in IE11
        minWidth: siderWidth,
        // https://github.com/ant-design/ant-design/issues/6349
        width: siderWidth
      });

      var siderCls = classNames(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-collapsed"), !!_this.state.collapsed), _defineProperty(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty(_classNames, "".concat(prefixCls, "-below"), !!_this.state.below), _defineProperty(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return React.createElement("aside", _extends({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), _jsx("div", {
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

  _createClass(InternalSider, [{
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
      return _jsx(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, void 0, _jsx(ConfigConsumer, {}, void 0, this.renderSider));
    }
  }]);

  return InternalSider;
}(PureComponent);

_defineProperty(InternalSider, "defaultProps", {
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
  return _jsx(LayoutContext.Consumer, {}, void 0, function (context) {
    return React.createElement(InternalSider, _extends({}, context, props));
  });
};

export default Sider;