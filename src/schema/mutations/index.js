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

   type ProcessingResponse implements MutationResponse {
      success: Boolean!
      message: String!
      ID: ID
   }

   type Mutation {
      createRecipe(name: String): RecipeResponse

      createIngredient(name: String): Ingredient

      updateIngredient(input: UpdateIngredientInput): Ingredient

      createProcessings(input: CreateProcessingsInput): [IngredientProcessing]

      deleteProcessing(input: DeleteProcessingInput): ProcessingResponse

      createProcessingName(name: String): ProcessingName

      createSupplierItem(name: String): SupplierItem
   }
`

export default typeDefs
