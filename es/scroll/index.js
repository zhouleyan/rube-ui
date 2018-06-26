import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './scroll.css';

var Scroll = function (_PureComponent) {
    _inherits(Scroll, _PureComponent);

    function Scroll() {
        _classCallCheck(this, Scroll);

        return _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).apply(this, arguments));
    }

    _createClass(Scroll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'scroll' },
                'Scroll'
            );
        }
    }]);

    return Scroll;
}(PureComponent);

Scroll.propTypes = {};
export default Scroll;