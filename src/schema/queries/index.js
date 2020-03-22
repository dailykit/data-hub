import { gql } from 'apollo-server-express'

const typeDefs = gql`
   type Query {
      recipes: [Recipe]!
      recipe(id: ID!): Recipe

      ingredients: [Ingredient]!
      ingredient(id: ID!): Ingredient
   }
`

export default typeDefs
