const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Ingredient {
      name: String
      processings: [Processing]!
   }
`

export default typeDefs
