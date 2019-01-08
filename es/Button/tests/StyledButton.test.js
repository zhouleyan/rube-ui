import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import StyledButton from '../StyledButton';

var _ref =
/*#__PURE__*/
_jsx(StyledButton, {});

var _ref2 =
/*#__PURE__*/
_jsx(StyledButton, {});

var _ref3 =
/*#__PURE__*/
_jsx(StyledButton, {
  attribute: "test"
});

describe('<StyledButton />', function () {
  it('should render an <button> tag', function () {
    var wrapper = mount(_ref);
    var renderedComponent = enzymeFind(wrapper, StyledButton);
    expect(renderedComponent.type()).toEqual('button');
  });
  it('should have a className attribute', function () {
    var wrapper = mount(_ref2);
    var renderedComponent = enzymeFind(wrapper, StyledButton);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var wrapper = mount(_jsx(StyledButton, {
      id: id
    }));
    var renderedComponent = enzymeFind(wrapper, StyledButton);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var wrapper = mount(_ref3);
    var renderedComponent = enzymeFind(wrapper, StyledButton);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});