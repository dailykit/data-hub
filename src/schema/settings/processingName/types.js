const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type ProcessingName {
      name: String
   }
`

export default typeDefs
