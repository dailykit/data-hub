const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

import { types as RecipeTypes, resolvers as RecipeResolvers } from './recipe'

import Queries from './queries'
import Mutations from './mutations'
import ResponseResolvers from './responses'

module.exports = makeExecutableSchema({
   typeDefs: [Queries, Mutations, RecipeTypes],
   resolvers: merge(ResponseResolvers, RecipeResolvers)
})
