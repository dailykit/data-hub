const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type LabelTemplate {
      id: ID!
      title: String!
   }
`

export default typeDefs
