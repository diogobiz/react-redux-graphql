import { GraphQLString } from 'graphql'

import TodoType from './type'
import { create, update } from './resolvers'

export const createTodo = {
  type: TodoType,
  args: {
    title: {
      type: GraphQLString
    }
  },
  resolve: create
}

export const updateTodo = {
  type: TodoType,
  args: {
    id: {
      type: GraphQLString
    },
    done: {
      type: GraphQLString
    }
  },
  resolve: update
}