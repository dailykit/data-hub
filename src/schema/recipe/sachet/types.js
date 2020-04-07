const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Sachet {
      id: ID
      isValid: Boolean
      ingredient: Ingredient
      processing: IngredientProcessing
      quantity: Quantity
      tracking: Boolean
      modes: [Mode]
   }
   type Quantity {
      value: Int
      unit: Unit
   }
   type Mode {
      isActive: Boolean
      type: String
      station: Station
      supplierItems: [SachetItem]
   }
   type SachetItem {
      isDefault: Boolean
      item: SupplierItem
      accuracy: Int
      packaging: Packaging
      isLabelled: Boolean
      labelTemplate: LabelTemplate
   }
   input CreateSachetInput {
      ingredientId: ID!
      processingId: ID!
      sachet: SachetInput!
   }
   input SachetInput {
      quantity: QuantityInput!
      tracking: Boolean!
      modes: [ModeInput!]!
   }
   input QuantityInput {
      value: Int!
      unit: ID!
   }
   input ModeInput {
      isActive: Boolean!
      type: String!
      station: ID!
      supplierItems: [SachetItemInput!]!
   }
   input SachetItemInput {
      isDefault: Boolean
      item: ID!
      accuracy: Int!
      packaging: ID!
      isLabelled: Boolean!
      labelTemplate: ID
   }
   input DeleteSachetInput {
      ingredientId: ID!
      processingId: ID!
      sachetId: ID!
   }
`

export default typeDefs
