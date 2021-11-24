import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//We need to check to see if the user is logged in. IF they are logged in and they go 

//to the sign up or sign in page it will redirect them to the browse page, secondly we will need to protect the Browse page 
//


export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
          //we are checking if there is a user object, 
        if (!user) {
          return children;
        }
//if there is a user redirect them to the logged in path
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}