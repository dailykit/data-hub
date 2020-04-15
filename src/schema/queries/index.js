import { gql } from 'apollo-server-express'

const typeDefs = gql`
   type Query {
      recipes: [Recipe]!
      recipe(id: ID!): Recipe

      ingredients: [Ingredient]!
      ingredient(id: ID!): Ingredient

      menucollections: [MenuCollection]!
      menucollection(id: ID!): MenuCollection

      products: [Product]!
      product(id: ID!): Product

      menus: [Menu]!
      menu(id: ID, name: String): Menu
      todaysMenu: [Menu]

      processings: [IngredientProcessing]!
      processing(id: ID!): IngredientProcessing

      processingNames: [ProcessingName]!
      processingName(id: ID!): ProcessingName

      allergens: [Allergen]!
      allergen(id: ID!): Allergen

      units: [Unit]!
      unit(id: ID!): Unit

      utensils: [Utensil]!
      utensil(id: ID!): Utensil

      stations: [Station]!
      station(id: ID!): Station

      supplierItems: [SupplierItem]!
      supplierItem(id: ID!): SupplierItem

      packagings: [Packaging]!
      packaging(id: ID): Packaging

      labelTemplates: [LabelTemplate]!
      labelTemplate(id: ID): LabelTemplate

      accompanimentTypes: [AccompanimentType]!
      accompanimentType(id: ID): AccompanimentType

      sachets: [Sachet]!
      sachet(id: ID!): Sachet

      brand: Brand
   }
`

export default typeDefs
