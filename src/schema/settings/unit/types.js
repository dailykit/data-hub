const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Unit {
      _id: ID!
      title: String!
   }
`

export default typeDefs
