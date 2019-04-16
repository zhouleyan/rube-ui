import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { push } from 'connected-react-router/immutable';
// import PropTypes from 'prop-types';

// import { setAuthority } from 'utils/auth/authority';
// import { reloadAuthorized } from 'utils/auth';

import LogoWithText from 'images/icons/LogoWithText';
import Input from 'components/Input';
import Icon from 'components/Icon';
import EyeSvg from 'components/Input/icons/EyeSvg';
import 'components/Input/style';

// import LoginMask from './LoginMask';

import './index.less';

const suffix = <Icon component={EyeSvg} viewBox="0 0 24 24" />;

/* eslint-disable react/prefer-stateless-function, no-console */
class Login extends PureComponent {
  componentDidMount() {
    console.log('Login Mounted!');
  }

  componentDidUpdate() {
    console.log('Login Updated!');
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('ok');
  };

  render() {
    // const { dispatch } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="A Rube-UI application loginpage" />
        </Helmet>
        <a className="logo" href="/">
          <LogoWithText width="200px" />
        </a>
        <div className="background" />
        <div className="login-wrapper">
          <div className="login-form">
            <div className="login-header">
              <h1>登录</h1>
              <p>欢迎使用DFM PaaS</p>
              <div className="login-header-mask">登录</div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="login-form-item">
                <label htmlFor="email">邮箱账户：</label>
                <Input placeholder="demo@demo.com" />
              </div>
              <div className="login-form-item">
                <label htmlFor="password">密码：</label>
                <div style={{ position: 'relative' }}>
                  <Input.Password placeholder="password" />
                </div>
              </div>
              <div className="login-form-item">
                <label htmlFor="password">密码：</label>
                <div style={{ position: 'relative' }}>
                  <Input
                    disabled
                    placeholder="basic use"
                    prefix={suffix}
                    suffix={suffix}
                  />
                </div>
              </div>
              <div className="submit">
                <button type="submit">
                  <span>登录</span>
                </button>
              </div>
            </form>
            {/* <button
              type="submit"
              onClick={evt => {
                if (evt !== undefined && evt.preventDefault)
                  evt.preventDefault();
                setAuthority('admins');
                reloadAuthorized();
                dispatch(push('/'));
              }}
            >
              登录
            </button>
            <button
              type="submit"
              onClick={evt => {
                if (evt !== undefined && evt.preventDefault)
                  evt.preventDefault();
                dispatch(push('/'));
              }}
            >
              强行进入
            </button> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func,
};

const withConnect = connect();

export default compose(withConnect)(Login);
