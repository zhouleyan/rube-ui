import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

const AuthorizedRoute = ({
  component: Component,
  render,
  authority,
  redirectTo,
  ...rest
}) => (
  <Authorized
    authority={authority}
    noMatch={<Route {...rest} render={() => <Redirect to={redirectTo} />} />}
  >
    <Route
      {...rest}
      render={props => (Component ? <Component {...props} /> : render(props))}
    />
  </Authorized>
);

AuthorizedRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.func,
  authority: PropTypes.any,
  redirectTo: PropTypes.object,
};

export default AuthorizedRoute;
