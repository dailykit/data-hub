const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type AccompanimentType {
      id: ID!
      title: String
   }
`

export default typeDefs
