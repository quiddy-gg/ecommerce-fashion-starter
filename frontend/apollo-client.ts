import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "apollo-link-error";

const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        new HttpLink({ uri: "http://localhost:8000/graphql/" }),
        link,
      ]),
});
