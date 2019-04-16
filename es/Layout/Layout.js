import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
export var LayoutContext = createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

var BasicLayout =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BasicLayout, _React$PureComponent);

  function BasicLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasicLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      siders: []
    });

    return _this;
  }

  _createClass(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this2 = this;

      return {
        addSider: function addSider(id) {
          _this2.setState(function (state) {
            return {
              siders: [].concat(_toConsumableArray(state.siders), [id])
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
          others = _objectWithoutProperties(_this$props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = classNames(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0));
      return _jsx(LayoutContext.Provider, {
        value: {
          siderHook: this.getSiderHook()
        }
      }, void 0, React.createElement(Tag, _extends({
        className: classString
      }, others), children));
    }
  }]);

  return BasicLayout;
}(React.PureComponent);

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName;

  /* eslint-disable react/no-multi-comp */
  return function (BasicComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      _inherits(Adapter, _React$PureComponent2);

      function Adapter() {
        var _getPrototypeOf3;

        var _this3;

        _classCallCheck(this, Adapter);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Adapter)).call.apply(_getPrototypeOf3, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this3), "renderComponent", function (_ref2) {
          var getPrefixCls = _ref2.getPrefixCls;
          var customizePrefixCls = _this3.props.prefixCls;
          var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
          return React.createElement(BasicComponent, _extends({
            prefixCls: prefixCls,
            tagName: tagName
          }, _this3.props));
        });

        return _this3;
      }

      _createClass(Adapter, [{
        key: "render",
        value: function render() {
          return _jsx(ConfigConsumer, {}, void 0, this.renderComponent);
        }
      }]);

      return Adapter;
    }(React.PureComponent), _defineProperty(_class, "Header", void 0), _defineProperty(_class, "Footer", void 0), _defineProperty(_class, "Content", void 0), _defineProperty(_class, "Sider", void 0), _temp;
  };
  /* eslint-enable react/no-multi-comp */
}

function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = _objectWithoutProperties(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classNames(className, prefixCls);
  return React.createElement(tagName, _objectSpread({
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
export default Layout;