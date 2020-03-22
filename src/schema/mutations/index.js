import { gql } from 'apollo-server-express'

const typeDefs = gql`
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

export default typeDefs
