const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Packaging {
      _id: ID
      title: String
   }
`

export default typeDefs
