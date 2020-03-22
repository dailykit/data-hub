const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Recipe {
      name: String
      type: String
      cookingProcess: [Step]!
      ingredients: [IngredientItem]
   }
   type IngredientItem {
      sachet: Sachet
      ingredient: Ingredient
      processing: Processing
   }
   type Step {
      description: String
   }
`

export default typeDefs
