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
   type AccompanimentProduct {
      product: Product
      discount: Int
   }
   type Accompaniment {
      type: AccompanimentType
      products: [AccompanimentProduct]
   }
   type RecipeItem {
      recipe: Recipe
      defaultState: ServingType
      mealKit: [ServingDetail]
      readyToEat: [ServingDetail]
      accompaniments: [Accompaniment]
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
      accompaniments: [AccompanimentInput]
   }
   input AccompanimentInput {
      type: ID
      products: [AccompanimentProductInput]
   }
   input AccompanimentProductInput {
      product: ID
      discount: Int
   }
   input MealInput {
      size: Int
      price: Int
      discount: Int
   }
`

export default typeDefs
