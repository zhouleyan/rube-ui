import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
import BtnLoadingSvg from './icons/BtnLoadingSvg';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  _createClass(Button, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof nextProps.loading === 'boolean') {
        return _objectSpread({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  // buttonNode;
  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "delayTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!loading) {
        if (onClick) {
          onClick(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderButton", function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          type = _this$props.type,
          className = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          _loadingProp = _this$props.loading,
          block = _this$props.block,
          rest = _objectWithoutProperties(_this$props, ["prefixCls", "type", "className", "children", "icon", "loading", "block"]);

      var loading = _this.state.loading;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var classes = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var btnIcon = icon;
      var iconNode = loading ? BtnLoadingSvg : btnIcon;
      /* eslint-disable indent */

      var kids = children || children === 0 ? React.Children.map(children, function (child) {
        if (typeof child === 'string') {
          return _jsx("span", {}, void 0, child);
        }

        return child;
      }) : null;
      /* eslint-enable indent */

      var htmlType = rest.htmlType,
          otherProps = _objectWithoutProperties(rest, ["htmlType"]);
      /* eslint-disable react/button-has-type */


      return React.createElement("button", _extends({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick // ref={this.saveButtonRef}

      }), iconNode, kids);
      /* eslint-enable react/button-has-type */
    });

    _this.state = {
      loading: props.loading
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    } // saveButtonRef = node => {
    //   this.buttonNode = node;
    // };

  }, {
    key: "render",
    value: function render() {
      return _jsx(ConfigConsumer, {}, void 0, this.renderButton);
    }
  }]);

  return Button;
}(Component);

_defineProperty(Button, "defaultProps", {
  icon: null,
  loading: false,
  htmlType: 'button',
  block: false
});

export default Button;