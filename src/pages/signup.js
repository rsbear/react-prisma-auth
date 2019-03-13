import React, { useState } from "react";
import cookie from "cookie";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { SectionTitle, FormInput, BtnPrimary } from "../lib/emotions";

export default function Signup(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <div css={loginwrapper}>
      <SectionTitle css={center}>Sign up.</SectionTitle>
      <Mutation
        mutation={SIGNMEUP}
        onCompleted={data => {
          document.cookie = cookie.serialize("token", data.signup.token, {
            maxAge: 30 * 24 * 60 * 60 // 30 days
          });
          window.location.reload();
          props.navigate("/");
        }}
      >
        {signup => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              await signup({
                variables: {
                  email: userEmail,
                  name: userName,
                  password: userPass
                }
              });
            }}
          >
            <FormInput
              autoFocus
              type="text"
              placeholder="email"
              onChange={e => setUserEmail(e.target.value)}
            />

            <FormInput
              type="text"
              placeholder="name"
              onChange={e => setUserName(e.target.value)}
            />
            <FormInput
              type="password"
              placeholder="password"
              onChange={e => setUserPass(e.target.value)}
            />
            <BtnPrimary type="submit">signup</BtnPrimary>
          </form>
        )}
      </Mutation>
    </div>
  );
}

const SIGNMEUP = gql`
  mutation signup($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
      user {
        id
        name
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
