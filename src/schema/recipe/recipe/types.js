const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Recipe {
      id: ID
      name: String
      type: String
      cookingTime: Int
      chef: String
      utensils: String
      description: String
      ingredients: [IngredientItem]
      servings: [Serving]!
      procedures: [Procedure]!
      allergens: [Allergen]!
      assets: Asset
   }
   type IngredientItem {
      ingredient: Ingredient
      processing: IngredientProcessing
   }
   type Serving {
      size: Int
      sachets: [Sachet]
   }
   type Procedure {
      name: String
      steps: [Step]
   }
   type Step {
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
      ingredients: [IngredientItemInput]
      servings: [ServingInput]
      procedures: [ProcedureInput]
   }
   input ServingInput {
      size: Int
      sachets: [ID]
   }
   input IngredientItemInput {
      ingredient: ID
      processing: ID
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
