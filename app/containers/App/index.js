/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Authorized from 'utils/auth';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { getQueryPath } from 'utils/utils';
import { APP_NAME, APP_DESC } from 'consts';
import './global-styles.less';

const { AuthorizedRoute } = Authorized;

function App({ routeData }) {
  const [
    { component: AuthLayout, routes: authRoutes },
    { component: BasicLayout, routes: basicRoutes },
    { component: PlaygroundLayout, routes: playgroundRoutes },
  ] = routeData;
  return (
    <React.Fragment>
      <Helmet titleTemplate={`%s - ${APP_NAME}`} defaultTitle={APP_NAME}>
        <meta name="description" content={APP_DESC} />
      </Helmet>
      <Switch>
        <Route
          path="/auth"
          render={props => <AuthLayout {...props} routes={authRoutes} />}
        />
        <Route
          path="/playground"
          render={props => (
            <PlaygroundLayout {...props} routes={playgroundRoutes} />
          )}
        />
        <AuthorizedRoute
          path="/"
          render={props => <BasicLayout {...props} routes={basicRoutes} />}
          authority={['admin', 'user']}
          redirectTo={{
            pathname: '/auth/login',
            search: getQueryPath('', { redirect: window.location.href }),
          }}
        />

        {/* TODO: 将NotFoundPage移至BasicLayout内实现 */}
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  );
}

App.propTypes = {
  routeData: PropTypes.array,
};

export default App;
