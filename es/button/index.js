import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

var Button = function (_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Button'
            );
        }
    }]);

    return Button;
}(PureComponent);

Button.propTypes = {};
export default Button;