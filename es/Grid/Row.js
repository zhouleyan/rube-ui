import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
import RowContext from './RowContext';
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
  _inherits(Row, _PureComponent);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      screens: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getGutter", function (gutter) {
      if (_typeof(gutter) === 'object') {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];

          if (_this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
            return gutter[breakpoint];
          }
        }
      }

      return gutter;
    });

    _defineProperty(_assertThisInitialized(_this), "renderRow", function (_ref) {
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
          others = _objectWithoutProperties(_this$props, ["prefixCls", "type", "justify", "align", "gutter", "className", "style", "children"]);

      var prefixCls = getPrefixCls('row', customizePrefixCls);

      var gutter = _this.getGutter(rawGutter);

      var classes = classNames(className, (_classNames = {}, _defineProperty(_classNames, prefixCls, !type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(justify), type && justify), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(align), type && align), _classNames));
      var rowStyle = gutter > 0 ?
      /* eslint-disable indent */
      _objectSpread({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;
      /* eslint-enable */

      var otherProps = _objectSpread({}, others);

      delete otherProps.gutter;
      return _jsx(RowContext.Provider, {
        value: {
          gutter: gutter
        }
      }, void 0, React.createElement("div", _extends({
        className: classes,
        style: rowStyle
      }, otherProps), children));
    });

    return _this;
  }

  _createClass(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object.keys(responsiveMap).map(function (screen) {
        return enquire.register(responsiveMap[screen], {
          match: function match() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: _objectSpread({}, prevState.screens, _defineProperty({}, screen, true))
              };
            });
          },
          unmatch: function unmatch() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: _objectSpread({}, prevState.screens, _defineProperty({}, screen, false))
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
      return _jsx(ConfigConsumer, {}, void 0, this.renderRow);
    }
  }]);

  return Row;
}(PureComponent);

Row.defaultProps = {
  gutter: 0
};
export default Row;