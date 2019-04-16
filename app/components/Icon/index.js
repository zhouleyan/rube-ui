import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Icon = props => {
  const {
    className,
    component: Component,
    viewBox,
    rotate,
    tabIndex,
    onClick,
    children,
    onKeyPress,
    ...restProps
  } = props;

  let innerNode = null;

  const classString = classNames(
    {
      'rube-icon': true,
    },
    className,
  );

  /* eslint-disable indent */
  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;
  /* eslint-enable indent */

  const innerSvgProps = {
    ...svgBaseProps,
    style: svgStyle,
    viewBox,
  };

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  if (Component) {
    innerNode = <Component {...innerSvgProps} />;
  }

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return (
    <i
      {...restProps}
      role="button"
      tabIndex={iconTabIndex}
      onClick={onClick}
      onKeyPress={onKeyPress}
      className={classString}
    >
      {innerNode}
    </i>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  viewBox: PropTypes.any,
  rotate: PropTypes.any,
  tabIndex: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.any,
  onKeyPress: PropTypes.func,
};

export default Icon;
