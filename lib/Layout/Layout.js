"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf4 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfigProvider = require("../ConfigProvider");

var LayoutContext = (0, _react.createContext)({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
exports.LayoutContext = LayoutContext;

var BasicLayout =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(BasicLayout, _React$PureComponent);

  function BasicLayout() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, BasicLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf4["default"])(BasicLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      siders: []
    });
    return _this;
  }

  (0, _createClass2["default"])(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this2 = this;

      return {
        addSider: function addSider(id) {
          _this2.setState(function (state) {
            return {
              siders: [].concat((0, _toConsumableArray2["default"])(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this2.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentID) {
                return currentID !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          hasSider = _this$props.hasSider,
          Tag = _this$props.tagName,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "className", "children", "hasSider", "tagName"]);
      var classString = (0, _classnames["default"])(className, prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0));
      return (0, _jsx2["default"])(LayoutContext.Provider, {
        value: {
          siderHook: this.getSiderHook()
        }
      }, void 0, _react["default"].createElement(Tag, (0, _extends2["default"])({
        className: classString
      }, others), children));
    }
  }]);
  return BasicLayout;
}(_react["default"].PureComponent);

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName;

  /* eslint-disable react/no-multi-comp */
  return function (BasicComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      (0, _inherits2["default"])(Adapter, _React$PureComponent2);

      function Adapter() {
        var _getPrototypeOf3;

        var _this3;

        (0, _classCallCheck2["default"])(this, Adapter);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this3 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf3 = (0, _getPrototypeOf4["default"])(Adapter)).call.apply(_getPrototypeOf3, [this].concat(args)));
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "renderComponent", function (_ref2) {
          var getPrefixCls = _ref2.getPrefixCls;
          var customizePrefixCls = _this3.props.prefixCls;
          var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
          return _react["default"].createElement(BasicComponent, (0, _extends2["default"])({
            prefixCls: prefixCls,
            tagName: tagName
          }, _this3.props));
        });
        return _this3;
      }

      (0, _createClass2["default"])(Adapter, [{
        key: "render",
        value: function render() {
          return (0, _jsx2["default"])(_ConfigProvider.ConfigConsumer, {}, void 0, this.renderComponent);
        }
      }]);
      return Adapter;
    }(_react["default"].PureComponent), (0, _defineProperty2["default"])(_class, "Header", void 0), (0, _defineProperty2["default"])(_class, "Footer", void 0), (0, _defineProperty2["default"])(_class, "Content", void 0), (0, _defineProperty2["default"])(_class, "Sider", void 0), _temp;
  };
  /* eslint-enable react/no-multi-comp */
}

function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = (0, _objectWithoutProperties2["default"])(props, ["prefixCls", "className", "children", "tagName"]);
  var classString = (0, _classnames["default"])(className, prefixCls);
  return _react["default"].createElement(tagName, (0, _objectSpread2["default"])({
    className: classString
  }, others), children);
}

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;