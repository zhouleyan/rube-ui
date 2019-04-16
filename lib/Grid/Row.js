"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfigProvider = require("../ConfigProvider");

var _RowContext = _interopRequireDefault(require("./RowContext"));

var enquire;

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
  enquire = require('enquire.js'); // eslint-disable-line
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};

var Row =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Row, _PureComponent);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      screens: {}
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getGutter", function (gutter) {
      if ((0, _typeof2["default"])(gutter) === 'object') {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];

          if (_this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
            return gutter[breakpoint];
          }
        }
      }

      return gutter;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderRow", function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          type = _this$props.type,
          justify = _this$props.justify,
          align = _this$props.align,
          rawGutter = _this$props.gutter,
          className = _this$props.className,
          style = _this$props.style,
          children = _this$props.children,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "type", "justify", "align", "gutter", "className", "style", "children"]);
      var prefixCls = getPrefixCls('row', customizePrefixCls);

      var gutter = _this.getGutter(rawGutter);

      var classes = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, !type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(justify), type && justify), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(align), type && align), _classNames));
      var rowStyle = gutter > 0 ?
      /* eslint-disable indent */
      (0, _objectSpread4["default"])({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;
      /* eslint-enable */

      var otherProps = (0, _objectSpread4["default"])({}, others);
      delete otherProps.gutter;
      return (0, _jsx2["default"])(_RowContext["default"].Provider, {
        value: {
          gutter: gutter
        }
      }, void 0, _react["default"].createElement("div", (0, _extends2["default"])({
        className: classes,
        style: rowStyle
      }, otherProps), children));
    });
    return _this;
  }

  (0, _createClass2["default"])(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object.keys(responsiveMap).map(function (screen) {
        return enquire.register(responsiveMap[screen], {
          match: function match() {
            if ((0, _typeof2["default"])(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: (0, _objectSpread4["default"])({}, prevState.screens, (0, _defineProperty2["default"])({}, screen, true))
              };
            });
          },
          unmatch: function unmatch() {
            if ((0, _typeof2["default"])(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: (0, _objectSpread4["default"])({}, prevState.screens, (0, _defineProperty2["default"])({}, screen, false))
              };
            });
          },
          destroy: function destroy() {}
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object.keys(responsiveMap).map(function (screen) {
        return enquire.unregister(responsiveMap[screen]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])(_ConfigProvider.ConfigConsumer, {}, void 0, this.renderRow);
    }
  }]);
  return Row;
}(_react.PureComponent);

Row.defaultProps = {
  gutter: 0
};
var _default = Row;
exports["default"] = _default;