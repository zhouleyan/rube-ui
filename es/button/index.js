import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import * as React from 'react';
// import PropTypes from 'prop-types';

var Button = function (_React$PureComponent) {
    _inherits(Button, _React$PureComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "rube-button" },
                "Button"
            );
        }
    }]);

    return Button;
}(React.PureComponent);

export default Button;

Button.propTypes = {};