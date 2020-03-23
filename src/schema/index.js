const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

import { Recipe, Ingredient, IngredientProcessing, Sachet } from './recipe'
import { Collection, Product, Menu } from './shop'
import { SupplierItem } from './inventory'
import { ProcessingName, Allergen } from './settings'

import Queries from './queries'
import Mutations from './mutations'
import ResponseResolvers from './responses'

module.exports = makeExecutableSchema({
   typeDefs: [
      Queries,
      Mutations,
      Recipe.types,
      Ingredient.types,
      IngredientProcessing.types,
      Sachet.types,
      Collection.types,
      Product.types,
      Menu.types,
      SupplierItem.types,
      ProcessingName.types,
      Allergen.types
   ],
   resolvers: merge(
      ResponseResolvers,
      Recipe.resolvers,
      Ingredient.resolvers,
      IngredientProcessing.resolvers,
      Sachet.resolvers,
      Collection.resolvers,
      Product.resolvers,
      Menu.resolvers,
      SupplierItem.resolvers,
      ProcessingName.resolvers,
      Allergen.resolvers
   )
})
