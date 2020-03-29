const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type IngredientProcessing {
      id: ID
      isValid: Boolean
      name: ProcessingName
      sachets: [Sachet]
      recipes: [Recipe]
   }

   input DeleteProcessingInput {
      ingredientId: ID
      processingId: ID
   }

   input CreateProcessingsInput {
      ingredientId: ID
      processingNames: [ID]!
   }
`

export default typeDefs
