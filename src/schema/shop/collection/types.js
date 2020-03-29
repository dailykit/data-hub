const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Category {
      title: String
      products: [Product]
   }
   type MenuCollection {
      id: ID!
      name: String
      categories: [Category]
   }
`

export default typeDefs
