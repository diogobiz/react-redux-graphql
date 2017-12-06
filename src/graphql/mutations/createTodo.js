import gql from 'graphql-tag'

export default gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
      done
    }
  }
`