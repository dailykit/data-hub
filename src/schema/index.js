const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

import { Recipe, Ingredient, Processing, Sachet } from './recipe'
import Collection from './collection'
import { SupplierItem } from './inventory'

import Queries from './queries'
import Mutations from './mutations'
import ResponseResolvers from './responses'

module.exports = makeExecutableSchema({
   typeDefs: [
      Queries,
      Mutations,
      Recipe.types,
      Ingredient.types,
      Processing.types,
      Sachet.types,
      Collection.types,
      SupplierItem.types
   ],
   resolvers: merge(
      ResponseResolvers,
      Recipe.resolvers,
      Ingredient.resolvers,
      Processing.resolvers,
      Sachet.resolvers,
      Collection.resolvers,
      SupplierItem.resolvers
   )
})
