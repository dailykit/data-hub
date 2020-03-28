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

   type SachetResponse implements MutationResponse {
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

      createSachet(input: CreateSachetInput): [Sachet]

      deleteSachet(input: DeleteSachetInput): SachetResponse

      createProcessingName(title: String): ProcessingName

      createSupplierItem(title: String): SupplierItem

      createUnit(title: String): Unit

      createStation(title: String): Station

      createPackaging(title: String): Packaging

      createLabelTemplate(title: String): LabelTemplate
   }
`

export default typeDefs
