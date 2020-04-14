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
      availability: String
   }

   input UpdateMenuCollectionInput {
      id: ID!
      name: String
      categories: [CategoryInput]
      availability: String
   }
   input CategoryInput {
      title: String
      products: [ID]
   }
`

export default typeDefs
