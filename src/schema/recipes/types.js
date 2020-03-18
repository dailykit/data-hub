const { gql } = require('apollo-server-express')

module.exports = gql`
   type Recipe {
      id: ID!
      name: String!
   }
`
