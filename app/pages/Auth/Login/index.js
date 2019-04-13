import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { push } from 'connected-react-router/immutable';
// import PropTypes from 'prop-types';

// import { setAuthority } from 'utils/auth/authority';
// import { reloadAuthorized } from 'utils/auth';

import LogoWithText from 'images/icons/LogoWithText';
// import LoginMask from './LoginMask';

import './index.less';

/* eslint-disable react/prefer-stateless-function, no-console */
class Login extends PureComponent {
  componentDidMount() {
    console.log('Login Mounted!');
  }

  componentDidUpdate() {
    console.log('Login Updated!');
  }

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
            <form>
              <div className="login-form-item">
                <label htmlFor="email">邮箱账户：</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="demo@demo.com"
                  required
                />
              </div>
              <div className="login-form-item">
                <label htmlFor="password">密码：</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    required
                  />
                </div>
              </div>
              <div className="submit" />
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
