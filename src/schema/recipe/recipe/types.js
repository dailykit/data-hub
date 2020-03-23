const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Recipe {
      name: String
      type: String
      servings: [Serving]!
      procedures: [Procedure]!
      allergens: [Allergen]!
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
      name: String
      steps: [Step]
   }
   type Step {
      title: String
      description: String
      images: [String]!
      videos: [String]!
   }
`

export default typeDefs
