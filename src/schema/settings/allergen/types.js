const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Allergen {
      name: String
   }
`

export default typeDefs
