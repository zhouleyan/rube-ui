import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { PureComponent } from 'react'; // import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

var _ref =
/*#__PURE__*/
_jsx("div", {}, void 0, "Input");

var Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);

  return Input;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Input.propTypes = {} : void 0;
export default Input;