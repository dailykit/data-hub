const { gql } = require('apollo-server-express')

module.exports = gql`
   type Query {
      recipes: [Recipe]

      getPurchaseOrder(supplierId: ID!): PurchaseOrder
      getPurchaseOrders():[PurchaseOrder]
      
      getSupplierItemProcessingSachet(id: ID!): SupplierItemProcessingSachet

      getSupplierItemProcessing(id: ID!): SupplierItemProcessing

      getSupplierItem(id: ID!): SupplierItem  
      
      getSupplier(id: ID!): Supplier
      getSuppliers:[Supplier]
      
      getWorkOrder(id: ID!): WorkOrder
      getInventories:[WorkOrder]!

      getOrderedItem(supplierId: ID! , supplierItemId: ID!):[OrderedItems]
   }
`
