import React from "react";
import { Route, Redirect } from "react-router-dom";


export const ProtectedRoute = ({
  component: Component,
  auth: Auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to="/signin"
            />
          );
        }
      }}
    />
  );
};

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
          return <Component {...props} />;
        }}/>
  )}