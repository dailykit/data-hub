const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type MenuItem {
      name: String
      menuId: String
      zipcode: [Int]
   }
   type Brand {
      name: String
      logo: String
      menus: [MenuItem]
   }
`

export default typeDefs
