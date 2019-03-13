import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import cookie from "cookie";
import { AUTH_TOKEN } from "./constant";

// const configAPI = "http://localhost:4002/graphql";
// const httpLink = createHttpLink({
//   uri: configAPI,
//   credentials: "same-origin"
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : ""
//     }
//   };
// });

// export const client = new ApolloClient({
//   connectToDevTools: process.browser,
//   ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
//   link: authLink.concat(httpLink),
//   // link: ApolloLink.concat([link]),
//   cache: new InMemoryCache()
// });

//
// BREAK
//

let apolloClient = null;

const configAPI = "http://localhost:4002/graphql";

export function create({ getToken }) {
  const httpLink = createHttpLink({
    uri: configAPI,
    credentials: "same-origin"
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

function parseCookies(req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || "" : document.cookie,
    options
  );
}

export const client = create({
  getToken: () => {
    return parseCookies().token;
  }
});
