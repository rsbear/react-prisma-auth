import React, { useState } from "react";
import cookie from "cookie";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { SectionTitle, FormInput, BtnPrimary } from "../lib/emotions";

export default function Login(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div css={loginwrapper}>
      <SectionTitle css={center}>Log in</SectionTitle>
      <Mutation
        mutation={LOGMEIN}
        onCompleted={data => {
          document.cookie = cookie.serialize("token", data.login.token, {
            maxAge: 30 * 24 * 60 * 60 // 30 days
          });
          window.location.reload();
          props.navigate("/");
        }}
      >
        {login => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              await login({
                variables: {
                  email: userEmail,
                  password: userPassword
                }
              });
            }}
          >
            <FormInput
              type="text"
              placeholder="email"
              onChange={e => setUserEmail(e.target.value)}
            />
            <FormInput
              type="password"
              placeholder="password"
              onChange={e => setUserPassword(e.target.value)}
            />
            <BtnPrimary type="submit">login</BtnPrimary>
          </form>
        )}
      </Mutation>
    </div>
  );
}

const LOGMEIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const loginwrapper = css`
  width: 400px;
  text-align: center;
`;

const center = css`
  display: flex;
  justify-content: center;
`;
