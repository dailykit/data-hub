const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Recipe {
      id: ID
      name: String
      type: String
      cookingTime: String
      chef: String
      utensils: String
      description: String
      servings: [Serving]!
      procedures: [Procedure]!
      allergens: [Allergen]!
      assets: Asset
   }
   type Serving {
      size: Int
      ingredients: [IngredientItem]
   }
   type IngredientItem {
      ingredient: Ingredient
      processing: IngredientProcessing
      sachet: Sachet
   }
   type Procedure {
      title: String
      description: String
      images: [AssetInfo]
      video: AssetInfo
   }
   type Asset {
      images: [AssetInfo]!
      video: AssetInfo
   }
   type AssetInfo {
      caption: String
      url: String
   }

   input UpdateRecipeInput {
      id: ID!
      name: String
      type: String
      cookingTime: Int
      chef: String
      description: String
      utensils: String
      servings: [ServingInput]
      procedures: [ProcedureInput]
   }
   input ServingInput {
      size: Int
      ingredients: [IngredientItemInput]
   }
   input IngredientItemInput {
      ingredient: ID
      processing: ID
      sachet: ID
   }
   input ProcedureInput {
      name: String
      steps: [StepInput]
   }
   input StepInput {
      title: String
      description: String
      images: [AssetInput]
      video: AssetInput
   }
   input AssetInput {
      caption: String
      url: String
   }
`

export default typeDefs
