const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Ingredient {
      _id: ID!
      isValid: Boolean!
      isPublished: Boolean!
      name: String!
      image: String
      processings: [ID!]!
      sachets: [ID!]!
   }

   input UpdateIngredientInput {
      ingredientId: ID!
      name: String!
      image: String
   }
`

export default typeDefs
