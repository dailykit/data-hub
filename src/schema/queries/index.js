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

      processings: [IngredientProcessing]!
      processing(id: ID!): IngredientProcessing
      processingsOfIngredient(id: ID!): IngredientProcessing

      processingNames: [ProcessingName]!
      processingName(id: ID!): ProcessingName

      allergens: [Allergen]!
      allergen(id: ID!): Allergen

      units: [Unit]!
      unit(id: ID!): Unit

      stations: [Station]!
      station(id: ID!): Station

      packagings: [Packaging]!
      packaging(id: ID): Packaging

      labelTemplates: [LabelTemplate]!
      labelTemplate(id: ID): LabelTemplate

      sachets: [Sachet]!
      sachet(id: ID!): Sachet
      sachetsOfProcessing(id: ID!): [Sachet]!

      brand: Brand
   }
`

export default typeDefs
