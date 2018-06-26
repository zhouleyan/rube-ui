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
// import './validator.css';
var Validator = function (_PureComponent) {
    (0, _inherits3["default"])(Validator, _PureComponent);

    function Validator() {
        (0, _classCallCheck3["default"])(this, Validator);
        return (0, _possibleConstructorReturn3["default"])(this, (Validator.__proto__ || Object.getPrototypeOf(Validator)).apply(this, arguments));
    }

    (0, _createClass3["default"])(Validator, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                { className: "validator" },
                "Validator"
            );
        }
    }]);
    return Validator;
}(_react.PureComponent);

Validator.propTypes = {};
exports["default"] = Validator;
module.exports = exports["default"];