import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from './Input';
import Icon from '../Icon';
import EyeSvg from './icons/EyeSvg';
import EyeClosedSvg from './icons/EyeClosedSvg';

const ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver',
};

class Password extends PureComponent {
  static defaultProps = {
    inputPrefixCls: 'rube-input',
    prefixCls: 'rube-input-password',
    action: 'click',
    visibilityToggle: true,
  };

  state = {
    visible: false,
  };

  onChange = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  getIcon() {
    const { prefixCls, action } = this.props;
    const iconTrigger = ActionMap[action] || '';
    const iconProps = {
      [iconTrigger]: this.onChange,
      className: `${prefixCls}-icon`,
      // type: this.state.visible ? 'eye' : 'eye-invisible',
      key: 'passwordIcon',
      onMouseDown: e => {
        e.preventDefault();
      },
    };
    return (
      <Icon
        {...iconProps}
        component={!this.state.visible ? EyeSvg : EyeClosedSvg}
        viewBox="0 0 24 24"
      />
    );
  }

  render() {
    const {
      className,
      prefixCls,
      inputPrefixCls,
      size,
      suffix,
      visibilityToggle,
      ...restProps
    } = this.props;
    const suffixIcon = visibilityToggle && this.getIcon();
    const inputClassName = classNames(prefixCls, className, {
      [`${prefixCls}-${size}`]: !!size,
    });
    return (
      <Input
        {...restProps}
        type={this.state.visible ? 'text' : 'password'}
        size={size}
        className={inputClassName}
        prefixCls={inputPrefixCls}
        suffix={suffixIcon}
      />
    );
  }
}

Password.propTypes = {
  action: PropTypes.string,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  inputPrefixCls: PropTypes.string,
  size: PropTypes.any,
  suffix: PropTypes.any,
  visibilityToggle: PropTypes.any,
};

export default Password;
