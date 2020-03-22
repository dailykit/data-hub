const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type RecipeItem {
      recipe: Recipe
   }
   type List {
      title: String
      recipes: [RecipeItem]!
   }
   type Collection {
      categories: [List]!
   }
`

export default typeDefs
