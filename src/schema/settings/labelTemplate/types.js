const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type LabelTemplate {
      _id: ID!
      title: String!
   }
`

export default typeDefs
