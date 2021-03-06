import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { PureComponent } from 'react'; // import PropTypes from 'prop-types';
// import './validator.css';

/* eslint-disable react/prefer-stateless-function */

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "validator"
}, void 0, "Validator");

var Validator =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Validator, _PureComponent);

  function Validator() {
    _classCallCheck(this, Validator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Validator).apply(this, arguments));
  }

  _createClass(Validator, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);

  return Validator;
}(PureComponent);

export default Validator;