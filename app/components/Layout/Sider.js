import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import isNumeric from '../_utils/isNumeric';
import { ConfigConsumer } from '../ConfigProvider';
import { LayoutContext } from './Layout';

if (typeof window !== 'undefined') {
  const matchMediaPolyfill = mediaQuery => ({
    media: mediaQuery,
    matches: false,
    addListener() {},
    removeListener() {},
  });
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const SiderContext = createContext({});

const generateID = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

class InternalSider extends PureComponent {
  static defaultProps = {
    // 是否可收起
    collapsible: false,
    // 默认是否收起
    defaultCollapsed: false,
    // 是否改变触发器箭头方向
    reverseArrow: false,
    // 宽度
    width: 200,
    // 收缩宽度
    collapsedWidth: 80,
    // 外部style
    style: {},
    // 主题
    theme: 'dark',
  };

  // 根据新的props更新state
  static getDerivedStateFromProps(nextProps) {
    if ('collapsed' in nextProps) {
      return {
        collapsed: nextProps.collapsed,
      };
    }
    return null;
  }

  // mediaQueryList
  mql;

  // uniqueID
  uniqueID;

  constructor(props) {
    super(props);
    this.uniqueID = generateID('rube-sider-');
    let matchMedia;
    if (typeof window !== 'undefined') {
      ({ matchMedia } = window);
    }
    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
      this.mql = matchMedia(`(max-width: ${dimensionMap[props.breakpoint]})`);
    }
    let collapsed;
    if ('collapsed' in props) {
      ({ collapsed } = props);
    } else {
      collapsed = props.defaultCollapsed;
    }
    this.state = {
      collapsed,
    };
  }

  componentDidMount() {
    if (this.mql) {
      this.mql.addListener(this.responsiveHandler);
      this.responsiveHandler(this.mql);
    }

    if (this.props.siderHook) {
      this.props.siderHook.addSider(this.uniqueID);
    }
  }

  componentWillUnmount() {
    if (this.mql) {
      this.mql.removeListener(this.responsiveHandler);
    }

    if (this.props.siderHook) {
      this.props.siderHook.removeSider(this.uniqueId);
    }
  }

  responsiveHandler = mql => {
    const { onBreakpoint } = this.props;
    if (onBreakpoint) {
      onBreakpoint(mql.matches);
    }
    if (this.state.collapsed !== mql.matches) {
      this.setCollapsed(mql.matches, 'responsive');
    }
  };

  setCollapsed = (collapsed, type) => {
    if (!('collapsed' in this.props)) {
      this.setState({
        collapsed,
      });
    }
    const { onCollapse } = this.props;
    if (onCollapse) {
      onCollapse(collapsed, type);
    }
  };

  toggle = () => {
    const collapsed = !this.state.collapsed;
    this.setCollapsed(collapsed, 'clickTrigger');
  };

  renderSider = ({ getPrefixCls }) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      theme,
      collapsible,
      reverseArrow,
      trigger,
      style,
      width,
      collapsedWidth,
      ...others
    } = this.props;
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const divProps = omit(others, [
      'collapsed',
      'defaultCollapsed',
      'onCollapse',
      'breakpoint',
      'onBreakpoint',
      'siderHook',
    ]);

    const rawWidth = this.state.collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);

    const zeroWidthTrigger =
      parseFloat(String(collapsedWidth || 0)) === 0 ? (
        <span
          role="button"
          tabIndex="0"
          onClick={this.toggle}
          onKeyPress={this.toggle}
          className={`${prefixCls}-zero-width-trigger ${prefixCls}-zero-width-trigger-${
            reverseArrow ? 'right' : 'left'
          }`}
        >
          ZERO
        </span>
      ) : null;

    const iconObj = {
      expanded: reverseArrow ? '>' : '<',
      collapsed: reverseArrow ? '<' : '>',
    };

    const status = this.state.collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    /* eslint-disable indent */
    const triggerDom =
      trigger !== null
        ? zeroWidthTrigger || (
            <div
              className={`${prefixCls}-trigger`}
              role="button"
              tabIndex="0"
              onClick={this.toggle}
              onKeyPress={this.toggle}
              style={{ width: siderWidth }}
            >
              {trigger || defaultTrigger}
            </div>
          )
        : null;
    /* eslint-enable */
    const divStyle = {
      ...style,
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth, // Fix width transition bug in IE11
      minWidth: siderWidth, // https://github.com/ant-design/ant-design/issues/6349
      width: siderWidth,
    };

    const siderCls = classNames(className, prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!this.state.collapsed,
      [`${prefixCls}-has-trigger`]:
        collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!this.state.below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0,
    });
    return (
      <aside className={siderCls} {...divProps} style={divStyle}>
        <div className={`${prefixCls}-children`}>{this.props.children}</div>
        {collapsible || (this.state.below && zeroWidthTrigger)
          ? triggerDom
          : null}
      </aside>
    );
  };

  render() {
    const { collapsed } = this.state;
    const { collapsedWidth } = this.props;
    return (
      <SiderContext.Provider
        value={{
          siderCollapsed: collapsed,
          collapsedWidth,
        }}
      >
        <ConfigConsumer>{this.renderSider}</ConfigConsumer>
      </SiderContext.Provider>
    );
  }
}

InternalSider.propTypes = {
  // 类前缀
  prefixCls: PropTypes.string,
  // 自定义样式类
  className: PropTypes.string,
  // 响应式触发断点
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  // 宽度
  width: PropTypes.number,
  // 是否可收起
  collapsible: PropTypes.bool,
  // 收缩宽度
  collapsedWidth: PropTypes.number,
  // 自定义样式
  style: PropTypes.object,
  // 默认是否收起
  defaultCollapsed: PropTypes.bool,
  // 是否改变触发器箭头方向
  reverseArrow: PropTypes.bool,
  // 折叠按钮
  trigger: PropTypes.node,
  // 主题
  theme: PropTypes.string,
  // siderHook
  siderHook: PropTypes.object,
  // 子元素/组件
  children: PropTypes.node,
  // 折叠按钮回调
  onCollapse: PropTypes.func,
  // 触发响应式回调
  onBreakpoint: PropTypes.func,
};

// Sider
const Sider = props => (
  <LayoutContext.Consumer>
    {context => <InternalSider {...context} {...props} />}
  </LayoutContext.Consumer>
);

export default Sider;
