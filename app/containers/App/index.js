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

// import HomePage from 'containers/HomePage/Loadable';
import Authorized from 'utils/auth';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BasicLayout from 'layouts/BasicLayout/Loadable';

const { AuthorizedRoute } = Authorized;

export default function App() {
  /*  */
  return (
    <div>
      <Helmet titleTemplate="%s - Rube-UI" defaultTitle="Rube-UI">
        <meta name="description" content="A Rube-UI application" />
      </Helmet>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <AuthorizedRoute
          a="a"
          path="/"
          render={props => <BasicLayout {...props} />}
          authority={['admin', 'user']}
          redirectPath="/405"
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
