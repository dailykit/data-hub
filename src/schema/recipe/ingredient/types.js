const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Ingredient {
      name: String
      processings: [IngredientProcessing]!
   }
`

export default typeDefs
