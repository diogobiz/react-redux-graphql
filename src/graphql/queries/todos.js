import gql from 'graphql-tag'

export default gql`
  query AllTodos {
    todos {
      id
      title
      done
    }
  }
`