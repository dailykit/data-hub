const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type IngredientProcessing {
      _id: ID!
      isValid: Boolean!
      name: ProcessingName!
      sachets: [ID!]!
      recipes: [ID!]!
   }

   input DeleteProcessingInput {
      ingredientId: ID!
      processingId: ID!
   }

   input CreateProcessingsInput {
      ingredientId: ID!
      processingNames: [ID!]!
   }
`

export default typeDefs
