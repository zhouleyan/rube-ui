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

import GlobalStyle from '../../global-styles';

const { AuthorizedRoute } = Authorized;

function App({ routeData }) {
  const [
    { component: AuthLayout, routes: authRoutes },
    { component: BasicLayout, routes: basicRoutes },
  ] = routeData;
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - Rube-UI" defaultTitle="Rube-UI">
        <meta name="description" content="A Rube-UI application" />
      </Helmet>
      <Switch>
        <Route
          path="/auth"
          render={props => <AuthLayout {...props} routes={authRoutes} />}
        />
        <AuthorizedRoute
          path="/"
          render={props => <BasicLayout {...props} routes={basicRoutes} />}
          authority={['admins', 'user']}
          redirectTo={{
            pathname: '/auth/login',
            search: getQueryPath('', { redirect: window.location.href }),
          }}
        />
        {/* TODO: 将NotFoundPage移至BasicLayout内实现 */}
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}

App.propTypes = {
  routeData: PropTypes.array,
};

export default App;
