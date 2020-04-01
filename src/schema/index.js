const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

import { Recipe, Ingredient, IngredientProcessing, Sachet } from './recipe'
import { Collection, Product, Menu } from './shop'
import { SupplierItem } from './inventory'
import {
   ProcessingName,
   Allergen,
   Unit,
   Station,
   Packaging,
   LabelTemplate,
   Utensil
} from './settings'
import Brand from './brand'

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
      Unit.types,
      Station.types,
      Packaging.types,
      LabelTemplate.types,
      Utensil.types,
      Allergen.types,
      Brand.types
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
      Unit.resolvers,
      Station.resolvers,
      Packaging.resolvers,
      LabelTemplate.resolvers,
      Utensil.resolvers,
      Allergen.resolvers,
      Brand.resolvers
   )
})
