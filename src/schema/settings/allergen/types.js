const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Allergen {
      id: ID!
      name: String
   }
`

export default typeDefs
