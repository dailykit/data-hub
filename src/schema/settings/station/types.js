const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Station {
      _id: ID!
      title: String!
   }
`

export default typeDefs
