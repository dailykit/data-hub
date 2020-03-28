const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type ProcessingName {
      _id: ID!
      title: String!
   }
`

export default typeDefs
