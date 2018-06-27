"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import PropTypes from 'prop-types';
var Button = function (_PureComponent) {
    (0, _inherits3["default"])(Button, _PureComponent);

    function Button() {
        (0, _classCallCheck3["default"])(this, Button);
        return (0, _possibleConstructorReturn3["default"])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3["default"])(Button, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                { className: "rube-button" },
                "Button"
            );
        }
    }]);
    return Button;
}(_react.PureComponent);

Button.propTypes = {};
exports["default"] = Button;
module.exports = exports["default"];