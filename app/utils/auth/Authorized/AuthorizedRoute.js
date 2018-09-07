import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

/* eslint-disable react/prop-types */
const AuthorizedRoute = ({
  component: Component,
  render,
  authority,
  redirectPath,
  ...rest
}) => (
  <Authorized
    authority={authority}
    noMatch={
      <Route
        {...rest}
        render={() => <Redirect to={{ pathname: redirectPath }} />}
      />
    }
  >
    <Route
      {...rest}
      render={props =>
        Component ? (
          <Component {...{ ...props, ...rest }} />
        ) : (
          render({ ...props, ...rest })
        )
      }
    />
  </Authorized>
);
/* eslint-enable react/prop-types */

export default AuthorizedRoute;
