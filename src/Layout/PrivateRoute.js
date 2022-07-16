import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const token = localStorage.getItem('token') || '';
  console.log('token', token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
