import { GraphQLList } from 'graphql'

import TodoType from './type'
import { all } from './resolvers'

// all Todos
export const todos = {
  type: new GraphQLList(TodoType),
  resolve: all
}