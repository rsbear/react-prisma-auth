import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import App from "./App";
import { client } from "./lib/initApollo";

const userQuery = client
  .query({
    query: gql`
      {
        me {
          id
          email
        }
      }
    `
  })
  .then(({ data }) => {
    return data.me;
  });

const authUser = userQuery.then(function(result) {
  return result;
});

const test = "test";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App userQuery={userQuery} />
  </ApolloProvider>,
  document.getElementById("root")
);
