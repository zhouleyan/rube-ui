import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function generator(props) {
  return function (BasicComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Adapter, _React$PureComponent);

      function Adapter() {
        _classCallCheck(this, Adapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(Adapter).apply(this, arguments));
      }

      _createClass(Adapter, [{
        key: "render",
        value: function render() {
          var prefixCls = props.prefixCls;
          return React.createElement(BasicComponent, _extends({
            prefixCls: prefixCls
          }, this.props));
        }
      }]);

      return Adapter;
    }(React.PureComponent), _defineProperty(_class, "Header", void 0), _defineProperty(_class, "Footer", void 0), _defineProperty(_class, "Content", void 0), _defineProperty(_class, "Sider", void 0), _temp;
  };
}

function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      others = _objectWithoutProperties(props, ["prefixCls", "className", "children"]);

  var divCls = classNames(className, prefixCls);
  return React.createElement("div", _extends({
    className: divCls
  }, others), children);
}

function Layout(props) {
  var prefixCls = 'rube-layout';

  var className = props.className,
      children = props.children,
      others = _objectWithoutProperties(props, ["className", "children"]);

  var hasSider = Children.toArray(children).some(function (child) {
    return child.type.name === 'Sider';
  });
  var classes = classNames(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-sider"), hasSider));
  return React.createElement("div", _extends({
    className: classes
  }, others), Children.toArray(children));
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
export default Layout;