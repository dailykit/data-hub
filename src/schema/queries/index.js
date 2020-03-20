const { gql } = require('apollo-server-express')

module.exports = gql`
   type Query {
      recipes: [Recipe]

      getPurchaseOrderOfSupplier(supplierId: ID!): PurchaseOrder
      getPurchaseOrders():[PurchaseOrder]
      getOrderedItem(supplierId:ID!,orderedItemId:ID!):PurchaseOrder
      
      getSupplierItemProcessingSachet(id: ID!): SupplierItemProcessingSachet

      getSupplierItemProcessing(id: ID!): SupplierItemProcessing

      getSupplierItem(id: ID!): SupplierItem  
      getSupplierItemsOfSupplier(supplierId: ID!): [SupplierItem]

      getSupplier(id: ID!): Supplier
      getSuppliers:[Supplier]
      
      getWorkOrder(id: ID!): WorkOrder
      getInventories:[WorkOrder]!

   }
`
