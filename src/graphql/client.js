import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'same-origin'
})

const configApolloClient = () => new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

export default configApolloClient