import React, { PropTypes } from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (authenticated) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
