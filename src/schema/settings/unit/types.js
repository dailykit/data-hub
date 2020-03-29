const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Unit {
      id: ID!
      title: String!
   }
`

export default typeDefs
