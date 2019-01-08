"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _testUtils = require("styled-components/test-utils");

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])(_Wrapper["default"], {});

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])(_Wrapper["default"], {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])(_Wrapper["default"], {
  attribute: "test"
});

describe('<Wrapper />', function () {
  it('should render an <div> tag', function () {
    var wrapper = (0, _enzyme.mount)(_ref);
    var renderedComponent = (0, _testUtils.enzymeFind)(wrapper, _Wrapper["default"]);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should have a className attribute', function () {
    var wrapper = (0, _enzyme.mount)(_ref2);
    var renderedComponent = (0, _testUtils.enzymeFind)(wrapper, _Wrapper["default"]);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var wrapper = (0, _enzyme.mount)((0, _jsx2["default"])(_Wrapper["default"], {
      id: id
    }));
    var renderedComponent = (0, _testUtils.enzymeFind)(wrapper, _Wrapper["default"]);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var wrapper = (0, _enzyme.mount)(_ref3);
    var renderedComponent = (0, _testUtils.enzymeFind)(wrapper, _Wrapper["default"]);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});