import React, { PropTypes } from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

const PublicRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authenticated) {
        return <Component {...props} />;
      }
      return <Redirect to="/" />;
    }}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
