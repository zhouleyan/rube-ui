import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react'; // import PropTypes from 'prop-types';

/* eslint-disable */

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
  }

  _createClass(Menu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          siderCollapsed = _this$props.siderCollapsed,
          collapsedWidth = _this$props.collapsedWidth,
          others = _objectWithoutProperties(_this$props, ["siderCollapsed", "collapsedWidth"]);

      return React.createElement("div", others, "Menu");
    }
  }]);

  return Menu;
}(Component);

export default Menu;