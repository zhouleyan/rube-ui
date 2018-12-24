import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react'; // import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      a: '123'
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var a = this.state.a;
      return React.createElement("div", {
        className: "rube-button"
      }, a);
    }
  }]);

  return Button;
}(React.PureComponent);

export { Button as default };
process.env.NODE_ENV !== "production" ? Button.propTypes = {} : void 0;