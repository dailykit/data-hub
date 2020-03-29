const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Recurring {
      startDate: String
      endDate: String
      day: [String]
      startTime: String
      endTime: String
   }
   type IncludeRange {
      recurring: [Recurring]
      customRange: [Range]
   }
   type Range {
      startDay: String
      endDay: String
      startTime: String
      endTime: String
   }
   type Availabilty {
      includeRange: [IncludeRange]
      excludeRange: [Range]
   }
   type MenuCollectionItem {
      menuCollection: [MenuCollection]
      availability: [String]
   }
   type Menu {
      id: ID!
      name: String
      menuCollections: [MenuCollectionItem]
   }
`

export default typeDefs
