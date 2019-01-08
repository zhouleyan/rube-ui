import _jsx from "@babel/runtime/helpers/jsx";

/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  // Render an anchor tag
  var button = _jsx(A, {
    href: props.href,
    onClick: props.onClick
  }, void 0, Children.toArray(props.children)); // If the Button has a handleRoute prop, we want to render a button


  if (props.handleRoute) {
    button = _jsx(StyledButton, {
      onClick: props.handleRoute
    }, void 0, Children.toArray(props.children));
  }

  return _jsx(Wrapper, {}, void 0, button);
}

export default Button;