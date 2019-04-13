import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
import RowContext from './RowContext';

let enquire;
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = mediaQuery => ({
    media: mediaQuery,
    matches: false,
    addListener() {},
    removeListener() {},
  });
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js'); // eslint-disable-line
}

const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

class Row extends PureComponent {
  state = {
    screens: {},
  };

  componentDidMount() {
    Object.keys(responsiveMap).map(screen =>
      enquire.register(responsiveMap[screen], {
        match: () => {
          if (typeof this.props.gutter !== 'object') {
            return;
          }
          this.setState(prevState => ({
            screens: {
              ...prevState.screens,
              [screen]: true,
            },
          }));
        },
        unmatch: () => {
          if (typeof this.props.gutter !== 'object') {
            return;
          }
          this.setState(prevState => ({
            screens: {
              ...prevState.screens,
              [screen]: false,
            },
          }));
        },
        destroy() {},
      }),
    );
  }

  componentWillUnmount() {
    Object.keys(responsiveMap).map(screen =>
      enquire.unregister(responsiveMap[screen]),
    );
  }

  getGutter = gutter => {
    if (typeof gutter === 'object') {
      for (let i = 0; i < responsiveArray.length; i += 1) {
        const breakpoint = responsiveArray[i];
        if (
          this.state.screens[breakpoint] &&
          gutter[breakpoint] !== undefined
        ) {
          return gutter[breakpoint];
        }
      }
    }
    return gutter;
  };

  renderRow = ({ getPrefixCls }) => {
    const {
      prefixCls: customizePrefixCls,
      type,
      justify,
      align,
      gutter: rawGutter,
      className,
      style,
      children,
      ...others
    } = this.props;
    const prefixCls = getPrefixCls('row', customizePrefixCls);
    const gutter = this.getGutter(rawGutter);
    const classes = classNames(className, {
      [prefixCls]: !type,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${type}-${justify}`]: type && justify,
      [`${prefixCls}-${type}-${align}`]: type && align,
    });
    const rowStyle =
      gutter > 0
        ? /* eslint-disable indent */
          {
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
            ...style,
          }
        : style;
    /* eslint-enable */
    const otherProps = { ...others };
    delete otherProps.gutter;
    return (
      <RowContext.Provider value={{ gutter }}>
        <div className={classes} style={rowStyle} {...otherProps}>
          {children}
        </div>
      </RowContext.Provider>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderRow}</ConfigConsumer>;
  }
}

Row.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
  ]),
  type: PropTypes.oneOf(['flex']),
};

Row.defaultProps = {
  gutter: 0,
};

export default Row;
