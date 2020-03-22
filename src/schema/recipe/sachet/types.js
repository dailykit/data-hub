const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Sachet {
      quantity: Quantity
      modes: [Mode]!
   }
   type Mode {
      label: String
      # station: Station
      items: [SachetItem]!
   }
   type Quantity {
      value: Int
      unit: String
   }
   type SachetItem {
      supplierItem: SupplierItem
      isWeighable: Boolean
      accuracy: Int
      # packaging: Packaging
      isLabelled: Boolean
      # labelTemplate: LabelTemplate
   }
`

export default typeDefs
