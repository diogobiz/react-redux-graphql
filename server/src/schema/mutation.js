import { GraphQLObjectType } from 'graphql'

import * as todos from './todos/mutation'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: '...',

  fields: () => ({
    ...todos
  })
})

export default mutation