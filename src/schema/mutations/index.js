const { gql } = require('apollo-server-express')

module.exports = gql`
   interface MutationResponse {
      success: Boolean!
      message: String!
   }

   type RecipeResponse implements MutationResponse {
      success: Boolean!
      message: String!
      recipe: Recipe
   }

   type Mutation {
      createRecipe(id: ID!): RecipeResponse
   }
`
