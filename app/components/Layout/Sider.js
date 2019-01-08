import React, { Children, PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import isNumeric from '../_utils/isNumeric';

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

export const SiderContext = createContext({
  siderCollapsed: false,
  collapsedWidth: 80,
});

class Sider extends PureComponent {
  static defaultProps = {
    // 类前缀
    prefixCls: 'rube-layout-sider',
    // 侧栏是否收起
    isCollapsed: true,
    // 宽度
    width: 200,
    // 是否可收起
    collapsible: false,
    // 收缩宽度
    collapsedWidth: 80,
    // 外部style
    style: {},
    // 默认是否收起
    defaultCollapsed: false,
    // 是否改变触发器箭头方向
    reverseArrow: false,
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

  constructor(props) {
    super(props);
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
  }

  componentWillUnmount() {
    if (this.mql) {
      this.mql.removeListener(this.responsiveHandler);
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

  render() {
    const {
      prefixCls,
      className,
      isCollapsed,
      width,
      collapsible,
      collapsedWidth,
      reverseArrow,
      trigger,
      style,
      children,
    } = this.props;
    const { collapsed } = this.state;
    const { Provider } = SiderContext;
    const contextValue = {
      siderCollapsed: collapsed,
      collapsedWidth,
    };
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);

    const classes = classNames(className, prefixCls, {
      [`${prefixCls}-zero-width`]: !siderWidth,
      [`${prefixCls}-collapsed`]: isCollapsed,
    });

    const iconObj = {
      expanded: reverseArrow ? '>' : '<',
      collapsed: reverseArrow ? '<' : '>',
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDOM =
      trigger !== null ? (
        <div
          role="button"
          tabIndex="0"
          className={`${prefixCls}-trigger`}
          style={{ width: siderWidth }}
          onClick={this.toggle}
          onKeyPress={this.toggle}
        >
          {trigger || defaultTrigger}
        </div>
      ) : null;

    const wrapStyles = {
      ...style,
      width: `${siderWidth}`,
      minWidth: `${siderWidth}`,
      maxWidth: `${siderWidth}`,
      flex: `0 0 ${siderWidth}`,
    };
    return (
      <div className={classes} style={wrapStyles}>
        <div className={`${prefixCls}-children`}>
          <Provider value={contextValue}>{Children.toArray(children)}</Provider>
        </div>
        {collapsible ? triggerDOM : null}
      </div>
    );
  }
}

Sider.propTypes = {
  // 类前缀
  prefixCls: PropTypes.string,
  // 自定义样式类
  className: PropTypes.string,
  // 响应式触发断点
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  // 侧栏是否收起
  isCollapsed: PropTypes.bool,
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
  // 子元素/组件
  children: PropTypes.node,
  // 折叠按钮回调
  onCollapse: PropTypes.func,
  // 触发响应式回调
  onBreakpoint: PropTypes.func,
};

Sider.Context = SiderContext;

export default Sider;
