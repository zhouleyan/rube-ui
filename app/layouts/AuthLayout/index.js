import React, { PureComponent, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { getPageQuery, getQueryPath } from 'utils/utils';

import injectReducer from 'utils/injectReducer';
import { makeSelectAuth } from './selectors';
import reducer from './reducer';

const getLoginPathWithRedirectPath = redirectPath => {
  const { redirect } = getPageQuery();
  return {
    pathname: redirectPath,
    search: getQueryPath('', {
      redirect,
    }),
  };
};

/* eslint-disable react/prefer-stateless-function, no-console */
class AuthLayout extends PureComponent {
  componentDidMount() {
    console.log('AuthLayout Mounted!');
  }

  componentDidUpdate() {
    console.log('AuthLayout Updated!');
  }

  render() {
    const { routes } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Auth Page</title>
          <meta name="description" content="A Rube-UI application authpage" />
        </Helmet>
        <Switch>
          {routes.map(route => {
            if (route.redirect) {
              return (
                <Redirect
                  key={route.path}
                  exact
                  from={route.path}
                  to={getLoginPathWithRedirectPath(route.redirect)}
                />
              );
            }
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
                name={route.name}
              />
            );
          })}
        </Switch>
      </Fragment>
    );
  }
}

AuthLayout.propTypes = {
  routes: PropTypes.array,
};

const mapStateToProps = createSelector(
  makeSelectAuth(),
  auth => ({
    auth,
  }),
);

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'auth', reducer });

export default compose(
  withReducer,
  withConnect,
)(AuthLayout);
