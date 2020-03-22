const { gql } = require('apollo-server-express')

export default gql`
   type Ingredient {
      id: ID!
      isValid: Boolean!
      isPublished: Boolean!
      name: String!
      image: String
      processings: [Processing!]!
      sachets: [ID!]!
   }
   type Processing {
      id: ID!
      isValid: Boolean!
      name: ProcessingName!
      sachets: [Sachet!]!
      recipes: [ID!]!
   }
   type ProcessingName {
      id: ID!
      title: String!
   }
   type Sachet {
      id: ID!
      isValid: Boolean!
      quantity: Quantity!
      tracking: Boolean!
      modes: [Mode!]!
   }
   type Quantity {
      value: Int!
      unit: String!
   }
   type Unit {
      id: ID!
      title: String!
   }
   type Mode {
      type: String!
      accuracy: Int!
      isActive: Boolean!
      isLabelled: Boolean!
   }
`
