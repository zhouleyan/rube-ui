import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

/**
 * Testing our Button component
 */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

var handleRoute = function handleRoute() {};

var href = 'http://mxstbr.com';

var children = _jsx("h1", {}, void 0, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(React.createElement(Button, _extends({
    href: href
  }, props), children));
};

describe('<Button />', function () {
  it('should render an <a> tag if no route is specified', function () {
    var renderedComponent = renderComponent({
      href: href
    });
    expect(renderedComponent.find('a')).toHaveLength(1);
  });
  it('should render a <button> tag to change route if the handleRoute prop is specified', function () {
    var renderedComponent = renderComponent({
      handleRoute: handleRoute
    });
    expect(renderedComponent.find('button')).toHaveLength(1);
  });
  it('should have children', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should handle click events', function () {
    var onClickSpy = jest.fn();
    var renderedComponent = renderComponent({
      onClick: onClickSpy
    });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should have a className attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });
  it('should not adopt a type attribute when rendering an <a> tag', function () {
    var type = 'text/html';
    var renderedComponent = renderComponent({
      href: href,
      type: type
    });
    expect(renderedComponent.find('a').prop('type')).toBeUndefined();
  });
  it('should not adopt a type attribute when rendering a button', function () {
    var type = 'submit';
    var renderedComponent = renderComponent({
      handleRoute: handleRoute,
      type: type
    });
    expect(renderedComponent.find('button').prop('type')).toBeUndefined();
  });
});