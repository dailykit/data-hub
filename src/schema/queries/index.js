import { gql } from 'apollo-server-express'

const typeDefs = gql`
   type Query {
      recipes: [Recipe]!
      recipe(id: ID!): Recipe

      ingredients: [Ingredient]!
      ingredient(id: ID!): Ingredient

      collections: [Collection]!
      collection(id: ID!): Collection

      processings: [Processing]!
      processing(id: ID!): Processing

      sachets: [Sachet]!
      sachet(id: ID!): Sachet
   }
`

export default typeDefs
