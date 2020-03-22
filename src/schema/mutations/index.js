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

   type CollectionResponse implements MutationResponse {
      success: Boolean!
      message: String!
      collection: Collection
   }

   type Mutation {
      createRecipe(id: ID!): RecipeResponse

      createCollection(lunch: [String], dinner: [String]): CollectionResponse
   }
`

export default typeDefs
