const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Ingredient {
      id: ID!
      isValid: Boolean!
      isPublished: Boolean!
      name: String!
      image: String
      processings: [IngredientProcessing!]!
      sachets: [Sachet!]!
   }

   input UpdateIngredientInput {
      id: ID!
      name: String!
      image: String
   }
`

export default typeDefs
