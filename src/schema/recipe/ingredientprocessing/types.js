const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type IngredientProcessing {
      processingName: ProcessingName
      sachets: [Sachet]!
   }
`

export default typeDefs
