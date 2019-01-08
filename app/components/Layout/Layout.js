import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function generator(props) {
  return BasicComponent =>
    class Adapter extends React.PureComponent {
      static Header;

      static Footer;

      static Content;

      static Sider;

      render() {
        const { prefixCls } = props;
        return <BasicComponent prefixCls={prefixCls} {...this.props} />;
      }
    };
}

function Basic(props) {
  const { prefixCls, className, children, ...others } = props;
  const divCls = classNames(className, prefixCls);
  return (
    <div className={divCls} {...others}>
      {children}
    </div>
  );
}

function Layout(props) {
  const prefixCls = 'rube-layout';
  const { className, children, ...others } = props;

  const hasSider = Children.toArray(children).some(
    child => child.type.name === 'Sider',
  );
  const classes = classNames(className, prefixCls, {
    [`${prefixCls}-has-sider`]: hasSider,
  });
  return (
    <div className={classes} {...others}>
      {Children.toArray(children)}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = generator({
  prefixCls: 'rube-layout-header',
})(Basic);

const Footer = generator({
  prefixCls: 'rube-layout-footer',
})(Basic);

const Content = generator({
  prefixCls: 'rube-layout-content',
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
