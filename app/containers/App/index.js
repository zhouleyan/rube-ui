/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Authorized from 'utils/auth';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthLayout from 'layouts/AuthLayout/Loadable';
import BasicLayout from 'layouts/BasicLayout/Loadable';
import { getQueryPath } from 'utils/utils';

const { AuthorizedRoute } = Authorized;

function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - Rube-UI" defaultTitle="Rube-UI">
        <meta name="description" content="A Rube-UI application" />
      </Helmet>
      <Switch>
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <AuthorizedRoute
          path="/"
          render={props => <BasicLayout {...props} />}
          authority={['admins', 'user']}
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

export default App;
