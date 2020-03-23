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
      name: String
      realtime: Boolean
      preOrder: PreOrder
      items: [Item]
   }
`

export default typeDefs
