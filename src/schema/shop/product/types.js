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
      title: String
      realtime: Boolean
      preOrder: PreOrder
      items: [Item]
   }

   input UpdateProductInput {
      id: ID!
      title: String
      realtime: Boolean
      preOrder: PreOrderInput
      items: [ItemInput]!
   }
   input PreOrderInput {
      isActive: Boolean
      days: Int
   }
   input ItemInput {
      label: String
      defaultRecipe: ID
      recipes: [RecipeInput]
   }
   input RecipeInput {
      recipe: ID
      defualtState: String
      mealKit: [MealInput]
      readyToEat: [MealInput]
   }
   input MealInput {
      size: Int
      price: Int
      discount: Int
   }
`

export default typeDefs
