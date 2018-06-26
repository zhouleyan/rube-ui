import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import './validator.css';

var Validator = function (_PureComponent) {
    _inherits(Validator, _PureComponent);

    function Validator() {
        _classCallCheck(this, Validator);

        return _possibleConstructorReturn(this, (Validator.__proto__ || Object.getPrototypeOf(Validator)).apply(this, arguments));
    }

    _createClass(Validator, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "validator" },
                "Validator"
            );
        }
    }]);

    return Validator;
}(PureComponent);

Validator.propTypes = {};
export default Validator;