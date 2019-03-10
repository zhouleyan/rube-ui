import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const configConsumerProps = [
  'getPopupContainer',
  'rootPrefixCls',
  'getPrefixCls',
  'renderEmpty',
  'csp',
  'autoInsertSpaceInButton',
];

const ConfigContext = createContext({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return `rube-${suffixCls}`;
  },

  // renderEmpty: defaultRenderEmpty,
});

export const ConfigConsumer = ConfigContext.Consumer;

class ConfigProvider extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    getPopupContainer: PropTypes.func,
    renderEmpty: PropTypes.func,
    csp: PropTypes.object,
    autoInsertSpaceInButton: PropTypes.bool,
    children: PropTypes.node,
  };

  getPrefixCls = (suffixCls, customizePrefixCls) => {
    const { prefixCls = 'rube' } = this.props;

    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  };

  renderProvider = context => {
    const {
      children,
      getPopupContainer,
      renderEmpty,
      csp,
      autoInsertSpaceInButton,
    } = this.props;

    const config = {
      ...context,
      getPrefixCls: this.getPrefixCls,
      csp,
      autoInsertSpaceInButton,
    };

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }
    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    return (
      <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
    );
  };
}

export default ConfigProvider;
