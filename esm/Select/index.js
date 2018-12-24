import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { PureComponent } from 'react'; // import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

var _ref =
/*#__PURE__*/
React.createElement("div", null, "Select");

var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);

  return Select;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Select.propTypes = {} : void 0;
export default Select;