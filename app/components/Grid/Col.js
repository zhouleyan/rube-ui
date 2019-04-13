import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';

import RowContext from './RowContext';

const responsiveArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

function Col(props) {
  const {
    prefixCls: customizePrefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    ...others
  } = props;
  /* eslint-disable react/prop-types */
  const renderCol = ({ getPrefixCls }) => {
    const prefixCls = getPrefixCls('col', customizePrefixCls);
    let sizeClassObj = {};
    responsiveArray.forEach(size => {
      let sizeProps = {};
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {};
      }

      delete others[size];

      sizeClassObj = {
        ...sizeClassObj,
        [`${prefixCls}-${size}-${sizeProps.span}`]:
          sizeProps.span !== undefined,
        [`${prefixCls}-${size}-order-${sizeProps.order}`]:
          sizeProps.order || sizeProps.order === 0,
        [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
          sizeProps.offset || sizeProps.offset === 0,
        [`${prefixCls}-${size}-push-${sizeProps.push}`]:
          sizeProps.push || sizeProps.push === 0,
        [`${prefixCls}-${size}-pull-${sizeProps.pull}`]:
          sizeProps.pull || sizeProps.pull === 0,
      };
    });
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull,
      },
      className,
      sizeClassObj,
    );
    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          let { style } = others;
          if (gutter > 0) {
            style = {
              paddingLeft: gutter / 2,
              paddingRight: gutter / 2,
              ...style,
            };
          }
          return (
            <div {...others} style={style} className={classes}>
              {children}
            </div>
          );
        }}
      </RowContext.Consumer>
    );
  };
  /* eslint-enable react/prop-types */
  return <ConfigConsumer>{renderCol}</ConfigConsumer>;
}

const objectOrNumber = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
]);

Col.propTypes = {
  prefixCls: PropTypes.string,
  span: PropTypes.number,
  order: PropTypes.number,
  offset: PropTypes.number,
  push: PropTypes.number,
  pull: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber,
  xxl: objectOrNumber,
};

export default Col;
