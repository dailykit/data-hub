const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

import { Recipe, Ingredient } from './recipe'

import Queries from './queries'
import Mutations from './mutations'
import ResponseResolvers from './responses'

module.exports = makeExecutableSchema({
   typeDefs: [Queries, Mutations, Recipe.types, Ingredient.types],
   resolvers: merge(ResponseResolvers, Recipe.resolvers, Ingredient.resolvers)
})
