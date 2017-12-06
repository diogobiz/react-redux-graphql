import gql from 'graphql-tag'

export default gql`
  mutation UpdateTodo($id: String!, $done: String!) {
    updateTodo(id: $id, done: $done) {
      id
      title
      done
    }
  }
`