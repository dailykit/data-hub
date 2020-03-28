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
      createRecipe(name: String): RecipeResponse

      createIngredient(name: String): Ingredient

      updateIngredient(input: UpdateIngredientInput): Ingredient

      createProcessing(processingNameId: ID): IngredientProcessing

      createProcessingName(name: String): ProcessingName

      createSupplierItem(name: String): SupplierItem
   }
`

export default typeDefs
