import React from "react";
import { Router, Redirect } from "@reach/router";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Landing from "./../components/landing";
import Login from "./../pages/login";
import Signup from "./../pages/signup";
import Dashboard from "./../pages/dashboard";

export const MainRender = props => (
  <div css={contentwrapper}>
    <Router>
      <Landing exact path="/" {...props} />
      <Login exact path="login" {...props} />
      <Signup exact path="signup" {...props} />
      {props.authUser ? (
        <Dashboard exact path="dashboard" {...props} />
      ) : (
        <Redirect from="dashboard" to="login" {...props} />
      )}
    </Router>
  </div>
);

const contentwrapper = css`
  width: 600px;
`;
