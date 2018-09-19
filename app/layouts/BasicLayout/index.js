import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import { setAuthority } from 'utils/auth/authority';
import { makeSelectBasic } from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function, no-console */
class BasicLayout extends PureComponent {
  componentDidMount() {
    console.log('BasicLayout Mounted!');
  }
  componentDidUpdate() {
    console.log('BasicLayout Updated!');
  }

  componentWillUnmount() {
    console.log('BasicLayout WillUnmount!');
  }

  render() {
    const { routes, dispatch } = this.props;
    console.log(routes);
    return (
      <Fragment>
        <Helmet>
          <title>Basic Page</title>
          <meta name="description" content="A Rube-UI application basicpage" />
        </Helmet>
        <div>BasicLayout</div>
        <button
          onClick={evt => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            setAuthority('guest');
            dispatch(push('/auth/login'));
          }}
        >
          退出登录
        </button>
      </Fragment>
    );
  }
}

BasicLayout.propTypes = {
  routes: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = createSelector(makeSelectBasic(), basic => ({
  basic,
}));

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'basic', reducer });

export default compose(
  withReducer,
  withConnect,
)(BasicLayout);
