const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type ProcessingName {
      id: ID!
      title: String!
   }
`

export default typeDefs
