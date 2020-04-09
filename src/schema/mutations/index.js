import { gql } from 'apollo-server-express'

const typeDefs = gql`
   interface MutationResponse {
      success: Boolean!
      message: String!
   }

   type ProductResponse implements MutationResponse {
      success: Boolean!
      message: String!
      product: Product
   }

   type RecipeResponse implements MutationResponse {
      success: Boolean!
      message: String!
      recipe: Recipe
   }

   type IngredientResponse implements MutationResponse {
      success: Boolean!
      message: String!
      ingredient: Ingredient
   }

   type ProcessingResponse implements MutationResponse {
      success: Boolean!
      message: String!
      processing: IngredientProcessing
   }

   type ProcessingNameResponse implements MutationResponse {
      success: Boolean!
      message: String!
      processingName: ProcessingName
   }

   type SachetResponse implements MutationResponse {
      success: Boolean!
      message: String!
      sachet: Sachet
   }

   type SupplierItemResponse implements MutationResponse {
      success: Boolean!
      message: String!
      supplierItem: SupplierItem
   }

   type UnitResponse implements MutationResponse {
      success: Boolean!
      message: String!
      unit: Unit
   }

   type UtensilResponse implements MutationResponse {
      success: Boolean!
      message: String!
      utensil: Utensil
   }

   type StationResponse implements MutationResponse {
      success: Boolean!
      message: String!
      station: Station
   }

   type PackagingResponse implements MutationResponse {
      success: Boolean!
      message: String!
      packaging: Packaging
   }

   type LabelTemplateResponse implements MutationResponse {
      success: Boolean!
      message: String!
      labelTemplate: LabelTemplate
   }

   type Mutation {
      createProduct(name: String): ProductResponse

      updateProduct(input: UpdateProductInput): ProductResponse

      createRecipe(name: String): RecipeResponse

      updateRecipe(input: UpdateRecipeInput): RecipeResponse

      createIngredient(name: String): IngredientResponse

      updateIngredient(input: UpdateIngredientInput): IngredientResponse

      createProcessings(input: CreateProcessingsInput): [IngredientProcessing]

      deleteProcessing(input: DeleteProcessingInput): ProcessingResponse

      createSachet(input: CreateSachetInput): SachetResponse

      deleteSachet(input: DeleteSachetInput): SachetResponse

      createProcessingName(title: String): ProcessingNameResponse

      createSupplierItem(title: String): SupplierItemResponse

      createUnit(title: String): UnitResponse

      createUtensil(title: String): UtensilResponse

      createStation(title: String): StationResponse

      createPackaging(title: String): PackagingResponse

      createLabelTemplate(title: String): LabelTemplateResponse
   }
`

export default typeDefs
