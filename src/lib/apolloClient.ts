import pkg from '@apollo/client';

const { ApolloClient, InMemoryCache, HttpLink } = pkg;

const HASURA_ENDPOINT = 'http://localhost:8080/v1/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: HASURA_ENDPOINT, fetch }),
  cache: new InMemoryCache(),
});

export default client;
