import _jsx from "@babel/runtime/helpers/jsx";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
export var configConsumerProps = ['getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton'];
var ConfigContext = createContext({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }

    return "rube-".concat(suffixCls);
  } // renderEmpty: defaultRenderEmpty,

});
export var ConfigConsumer = ConfigContext.Consumer;

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getPrefixCls", function (suffixCls, customizePrefixCls) {
      var _this$props$prefixCls = _this.props.prefixCls,
          prefixCls = _this$props$prefixCls === void 0 ? 'rube' : _this$props$prefixCls;

      if (customizePrefixCls) {
        return customizePrefixCls;
      }

      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    });

    _defineProperty(_assertThisInitialized(_this), "renderProvider", function (context) {
      var _this$props = _this.props,
          children = _this$props.children,
          getPopupContainer = _this$props.getPopupContainer,
          renderEmpty = _this$props.renderEmpty,
          csp = _this$props.csp,
          autoInsertSpaceInButton = _this$props.autoInsertSpaceInButton;

      var config = _objectSpread({}, context, {
        getPrefixCls: _this.getPrefixCls,
        csp: csp,
        autoInsertSpaceInButton: autoInsertSpaceInButton
      });

      if (getPopupContainer) {
        config.getPopupContainer = getPopupContainer;
      }

      if (renderEmpty) {
        config.renderEmpty = renderEmpty;
      }

      return _jsx(ConfigContext.Provider, {
        value: config
      }, void 0, children);
    });

    return _this;
  }

  return ConfigProvider;
}(React.Component);

export default ConfigProvider;