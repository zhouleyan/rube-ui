import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Wrapper from '../Wrapper';

var _ref =
/*#__PURE__*/
_jsx(Wrapper, {});

var _ref2 =
/*#__PURE__*/
_jsx(Wrapper, {});

var _ref3 =
/*#__PURE__*/
_jsx(Wrapper, {
  attribute: "test"
});

describe('<Wrapper />', function () {
  it('should render an <div> tag', function () {
    var wrapper = mount(_ref);
    var renderedComponent = enzymeFind(wrapper, Wrapper);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should have a className attribute', function () {
    var wrapper = mount(_ref2);
    var renderedComponent = enzymeFind(wrapper, Wrapper);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var wrapper = mount(_jsx(Wrapper, {
      id: id
    }));
    var renderedComponent = enzymeFind(wrapper, Wrapper);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var wrapper = mount(_ref3);
    var renderedComponent = enzymeFind(wrapper, Wrapper);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});