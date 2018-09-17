import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function, no-console */
class Login extends PureComponent {
  render() {
    const { onPush } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="A Rube-UI application loginpage" />
        </Helmet>
        <div>
          Login
          <button onClick={onPush}>返回</button>
        </div>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPush: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(push('/'));
    },
  };
}

Login.propTypes = {
  onPush: PropTypes.func,
  // match: PropTypes.object,
  // location: PropTypes.object,
};

// export default Login;
export default connect(
  undefined,
  mapDispatchToProps,
)(Login);
