import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

var Select = function (_PureComponent) {
    _inherits(Select, _PureComponent);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Select'
            );
        }
    }]);

    return Select;
}(PureComponent);

Select.propTypes = {};
export default Select;