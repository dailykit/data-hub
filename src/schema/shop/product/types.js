const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type PreOrder {
      isActive: Boolean
      days: Int
   }
   enum ServingType {
      READY_TO_EAT
      MEAL_KIT
   }
   type ServingDetail {
      size: Int
      price: Int
      discount: Int
   }
   type RecipeItem {
      recipe: Recipe
      defaultState: ServingType
      mealKit: [ServingDetail]
      readyToEat: [ServingDetail]
   }
   type Item {
      label: String
      defaultRecipe: Recipe
      recipes: [RecipeItem]
   }
   type Product {
      id: ID!
      name: String
      realtime: Boolean
      preOrder: PreOrder
      items: [Item]
   }

   input UpdateProductInput {
      id: ID!
      name: String
      realtime: Boolean
      #Add fields here as we go
   }
`

export default typeDefs
