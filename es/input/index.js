import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

var Input = function (_PureComponent) {
    _inherits(Input, _PureComponent);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Input'
            );
        }
    }]);

    return Input;
}(PureComponent);

Input.propTypes = {};
export default Input;