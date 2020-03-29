const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Station {
      id: ID!
      title: String!
   }
`

export default typeDefs
