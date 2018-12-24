import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { PureComponent } from 'react'; // import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

var _ref =
/*#__PURE__*/
React.createElement("div", {
  className: "scroll"
}, "Scroll");

var Scroll =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Scroll, _PureComponent);

  function Scroll() {
    _classCallCheck(this, Scroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scroll).apply(this, arguments));
  }

  _createClass(Scroll, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);

  return Scroll;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Scroll.propTypes = {} : void 0;
export default Scroll;