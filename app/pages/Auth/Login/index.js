import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { push } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';

import { setAuthority } from 'utils/auth/authority';
import { reloadAuthorized } from 'utils/auth';
import LogoWithText from 'images/icons/LogoWithText';
import LoginForm from './LoginForm';

import './index.less';

/* eslint-disable react/prefer-stateless-function, no-console */
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Login Mounted!');
  }

  componentDidUpdate() {
    console.log('Login Updated!');
  }

  handleLoginSubmit = (values, actions) => {
    const { dispatch } = this.props;
    setTimeout(() => {
      // console.log(values);
      actions.setSubmitting(false);
      setAuthority('admin');
      reloadAuthorized();
      dispatch(push('/'));
    }, 2000);
  };

  render() {
    const { submitError } = this.state;
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
            <LoginForm
              submitError={submitError}
              onLoginSubmit={this.handleLoginSubmit}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
