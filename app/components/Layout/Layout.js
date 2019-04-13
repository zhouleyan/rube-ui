import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ConfigConsumer } from '../ConfigProvider';

export const LayoutContext = createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null,
  },
});

class BasicLayout extends React.PureComponent {
  state = { siders: [] };

  getSiderHook() {
    return {
      addSider: id => {
        this.setState(state => ({
          siders: [...state.siders, id],
        }));
      },
      removeSider: id => {
        this.setState(state => ({
          siders: state.siders.filter(currentID => currentID !== id),
        }));
      },
    };
  }

  render() {
    const {
      prefixCls,
      className,
      children,
      hasSider,
      tagName: Tag,
      ...others
    } = this.props;
    const classString = classNames(className, prefixCls, {
      [`${prefixCls}-has-sider`]:
        typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0,
    });

    return (
      <LayoutContext.Provider value={{ siderHook: this.getSiderHook() }}>
        <Tag className={classString} {...others}>
          {children}
        </Tag>
      </LayoutContext.Provider>
    );
  }
}

function generator({ suffixCls, tagName }) {
  /* eslint-disable react/no-multi-comp */
  return BasicComponent =>
    class Adapter extends React.PureComponent {
      static Header;

      static Footer;

      static Content;

      static Sider;

      static propTypes = {
        // 类前缀
        prefixCls: PropTypes.string,
      };

      renderComponent = ({ getPrefixCls }) => {
        const { prefixCls: customizePrefixCls } = this.props;
        const prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
        return (
          <BasicComponent
            prefixCls={prefixCls}
            tagName={tagName}
            {...this.props}
          />
        );
      };

      render() {
        return <ConfigConsumer>{this.renderComponent}</ConfigConsumer>;
      }
    };
  /* eslint-enable react/no-multi-comp */
}

function Basic(props) {
  const { prefixCls, className, children, tagName, ...others } = props;
  const classString = classNames(className, prefixCls);
  return React.createElement(
    tagName,
    { className: classString, ...others },
    children,
  );
}

Basic.propTypes = {
  // 类前缀
  prefixCls: PropTypes.string,
  // 自定义样式类
  className: PropTypes.string,
  // 子元素/组件
  children: PropTypes.node.isRequired,
  // Tag名称
  tagName: PropTypes.string,
};

BasicLayout.propTypes = {
  // 类前缀
  prefixCls: PropTypes.string,
  // 自定义样式类
  className: PropTypes.string,
  // 子元素/组件
  children: PropTypes.node.isRequired,
  // 是否有Sider
  hasSider: PropTypes.bool,
  // Tag名称
  tagName: PropTypes.string,
};

const Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
})(BasicLayout);

const Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
})(Basic);

const Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
})(Basic);

const Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
