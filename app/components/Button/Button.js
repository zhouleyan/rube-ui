import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ConfigConsumer } from '../ConfigProvider';
import BtnLoadingSvg from './icons/BtnLoadingSvg';

const ButtonHTMLTypes = ['submit', 'button', 'reset'];

class Button extends Component {
  static defaultProps = {
    icon: null,
    loading: false,
    htmlType: 'button',
    block: false,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    htmlType: PropTypes.oneOf(ButtonHTMLTypes),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.any,
    block: PropTypes.bool,
    children: PropTypes.node,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof nextProps.loading === 'boolean') {
      return {
        ...prevState,
        loading: nextProps.loading,
      };
    }
    return null;
  }

  delayTimeout;
  // buttonNode;

  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
      clearTimeout(this.delayTimeout);
    }

    const { loading } = this.props;
    if (loading && typeof loading !== 'boolean' && loading.delay) {
      this.delayTimeout = window.setTimeout(
        () => this.setState({ loading }),
        loading.delay,
      );
    }
  }

  componentWillUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  // saveButtonRef = node => {
  //   this.buttonNode = node;
  // };

  handleClick = e => {
    const { loading } = this.state;
    const { onClick } = this.props;
    if (!loading) {
      if (onClick) {
        onClick(e);
      }
    }
  };

  renderButton = ({ getPrefixCls }) => {
    const {
      prefixCls: customizePrefixCls,
      type,
      className,
      children,
      icon,
      loading: _loadingProp,
      block,
      ...rest
    } = this.props;
    const { loading } = this.state;

    const prefixCls = getPrefixCls('btn', customizePrefixCls);

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-block`]: block,
    });

    const btnIcon = icon;
    const iconNode = loading ? BtnLoadingSvg : btnIcon;
    /* eslint-disable indent */
    const kids =
      children || children === 0
        ? React.Children.map(children, child => {
            if (typeof child === 'string') {
              return <span>{child}</span>;
            }
            return child;
          })
        : null;
    /* eslint-enable indent */

    const { htmlType, ...otherProps } = rest;

    /* eslint-disable react/button-has-type */
    return (
      <button
        {...otherProps}
        type={htmlType}
        className={classes}
        onClick={this.handleClick}
        // ref={this.saveButtonRef}
      >
        {iconNode}
        {kids}
      </button>
    );
    /* eslint-enable react/button-has-type */
  };

  render() {
    return <ConfigConsumer>{this.renderButton}</ConfigConsumer>;
  }
}

export default Button;
