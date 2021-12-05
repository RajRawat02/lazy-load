import React from "react";
import { Redirect, Route } from "react-router-dom";
import { CONSTANTS } from "./components/Constants/constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const localUser = localStorage.getItem(CONSTANTS.USER_KEY);
  const authService = localUser ? JSON.parse(localUser) : {};
  console.log("rest", rest);
  const isLoggedIn = authService.logIn;
  console.log("isLoggedIn", isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && window.location.pathname == "/" ? (
          <Redirect to={{ pathname: CONSTANTS.ROUTES.HOME }} />
        ) : isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
