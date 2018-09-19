import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';

import { setAuthority } from 'utils/auth/authority';

/* eslint-disable react/prefer-stateless-function, no-console */
class Login extends Component {
  componentDidMount() {
    console.log('Login Mounted!');
  }

  componentDidUpdate() {
    console.log('Login Updated!');
  }

  render() {
    const { dispatch } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="A Rube-UI application loginpage" />
        </Helmet>
        <div>Login</div>
        <button
          onClick={evt => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            setAuthority('admins');
            dispatch(push('/'));
          }}
        >
          登录
        </button>
      </Fragment>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
};

const withConnect = connect();

export default compose(withConnect)(Login);
