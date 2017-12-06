import { GraphQLObjectType, GraphQLString } from 'graphql'

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    done: {
      type: GraphQLString
    }
  })
})

export default TodoType