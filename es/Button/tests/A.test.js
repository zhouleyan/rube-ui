import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import A from '../A';

var _ref =
/*#__PURE__*/
_jsx(A, {});

var _ref2 =
/*#__PURE__*/
_jsx(A, {});

var _ref3 =
/*#__PURE__*/
_jsx(A, {
  attribute: "test"
});

describe('<A />', function () {
  it('should render an <a> tag', function () {
    var wrapper = mount(_ref);
    var renderedComponent = enzymeFind(wrapper, A);
    expect(renderedComponent.type()).toEqual('a');
  });
  it('should have a className attribute', function () {
    var wrapper = mount(_ref2);
    var renderedComponent = enzymeFind(wrapper, A);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var wrapper = mount(_jsx(A, {
      id: id
    }));
    var renderedComponent = enzymeFind(wrapper, A);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var wrapper = mount(_ref3);
    var renderedComponent = enzymeFind(wrapper, A);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});