import React, { PureComponent } from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import { ConfigConsumer } from '../ConfigProvider';

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear);
}

const InputSize = ['small', 'default', 'large'];

class Input extends PureComponent {
  static defaultProps = {
    type: 'text',
    disabled: false,
  };

  static propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(InputSize),
    maxLength: PropTypes.number,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    className: PropTypes.string,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    prefixCls: PropTypes.string,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    allowClear: PropTypes.bool,
  };

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  input;

  constructor(props) {
    super(props);
    const value =
      typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
    };
  }

  getInputClassName(prefixCls) {
    const { size, disabled } = this.props;
    return classNames(prefixCls, {
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-disabled`]: disabled,
    });
  }

  saveInput = node => {
    this.input = node;
  };

  setValue(value, e, callback) {
    if (!('value' in this.props)) {
      this.setState({ value }, callback);
    }

    const { onChange } = this.props;
    if (onChange) {
      let event = e;
      if (e.type === 'click') {
        // click clear icon
        event = Object.create(e);
        event.target = this.input;
        event.currentTarget = this.input;
        const originalInputValue = this.input.value;
        // change input value cause e.target.value should be '' when clear input
        this.input.value = '';
        onChange(event);
        // reset input value
        this.input.value = originalInputValue;
        return;
      }
      onChange(event);
    }
  }

  handleChange = e => {
    this.setValue(e.target.value, e);
  };

  handleKeyDown = e => {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  renderSuffix(prefixCls) {
    const { suffix, allowClear } = this.props;
    if (suffix || allowClear) {
      return <span className={`${prefixCls}-suffix`}>{suffix}</span>;
    }
    return null;
  }

  renderLabeledInput(prefixCls, children) {
    const { addonBefore, addonAfter /* style, size, className */ } = this.props;
    // Not wrap when there is not addons
    if (!addonBefore && !addonAfter) {
      return children;
    }
    return children;
  }

  renderLabeledIcon(prefixCls, children) {
    const { props } = this;
    const suffix = this.renderSuffix(prefixCls);
    if (!hasPrefixSuffix(props)) {
      return children;
    }

    const prefix = props.prefix ? (
      <span className={`${prefixCls}-prefix`}>{props.prefix}</span>
    ) : null;

    const affixWrapperCls = classNames(
      props.className,
      `${prefixCls}-affix-wrapper`,
      {
        [`${prefixCls}-affix-wrapper-sm`]: props.size === 'small',
        [`${prefixCls}-affix-wrapper-lg`]: props.size === 'large',
      },
    );

    return (
      <span className={affixWrapperCls} style={props.style}>
        {prefix}
        {React.cloneElement(children, {
          style: null,
          className: this.getInputClassName(prefixCls),
        })}
        {suffix}
      </span>
    );
  }

  renderInput(prefixCls) {
    const { className, addonBefore, addonAfter } = this.props;
    const { value } = this.state;
    // Parent props
    const otherProps = omit(this.props, [
      'prefixCls',
      'onPressEnter',
      'addonBefore',
      'addonAfter',
      'prefix',
      'suffix',
      'allowClear',
      'defaultValue',
    ]);

    return this.renderLabeledIcon(
      prefixCls,
      <input
        {...otherProps}
        value={fixControlledValue(value)}
        onChange={this.handleChange}
        className={classNames(this.getInputClassName(prefixCls), {
          [className]: className && !addonBefore && !addonAfter,
        })}
        onKeyDown={this.handleKeyDown}
        ref={this.saveInput}
      />,
    );
  }

  renderComponent = ({ getPrefixCls }) => {
    const { prefixCls: customizePrefixCls } = this.props;
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    return this.renderLabeledInput(prefixCls, this.renderInput(prefixCls));
  };

  render() {
    return <ConfigConsumer>{this.renderComponent}</ConfigConsumer>;
  }
}

Input.propTypes = {};

export default Input;
