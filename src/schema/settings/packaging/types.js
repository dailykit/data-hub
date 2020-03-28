const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Packaging {
      id: ID
      title: String
   }
`

export default typeDefs
