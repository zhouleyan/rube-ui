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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function generator(props) {
  return function (BasicComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$PureComponent) {
      (0, _inherits2["default"])(Adapter, _React$PureComponent);

      function Adapter() {
        (0, _classCallCheck2["default"])(this, Adapter);
        return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Adapter).apply(this, arguments));
      }

      (0, _createClass2["default"])(Adapter, [{
        key: "render",
        value: function render() {
          var prefixCls = props.prefixCls;
          return _react["default"].createElement(BasicComponent, (0, _extends2["default"])({
            prefixCls: prefixCls
          }, this.props));
        }
      }]);
      return Adapter;
    }(_react["default"].PureComponent), (0, _defineProperty2["default"])(_class, "Header", void 0), (0, _defineProperty2["default"])(_class, "Footer", void 0), (0, _defineProperty2["default"])(_class, "Content", void 0), (0, _defineProperty2["default"])(_class, "Sider", void 0), _temp;
  };
}

function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      others = (0, _objectWithoutProperties2["default"])(props, ["prefixCls", "className", "children"]);
  var divCls = (0, _classnames["default"])(className, prefixCls);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: divCls
  }, others), children);
}

function Layout(props) {
  var prefixCls = 'rube-layout';
  var className = props.className,
      children = props.children,
      others = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);

  var hasSider = _react.Children.toArray(children).some(function (child) {
    return child.type.name === 'Sider';
  });

  var classes = (0, _classnames["default"])(className, prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-has-sider"), hasSider));
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: classes
  }, others), _react.Children.toArray(children));
}

var Header = generator({
  prefixCls: 'rube-layout-header'
})(Basic);
var Footer = generator({
  prefixCls: 'rube-layout-footer'
})(Basic);
var Content = generator({
  prefixCls: 'rube-layout-content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;