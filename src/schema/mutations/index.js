const { gql } = require('apollo-server-express')

module.exports = gql`
   interface MutationResponse {
      success: Boolean!
      message: String!
   }

   type RecipeResponse implements MutationResponse {
      success: Boolean!
      message: String!
      recipe: Recipe
   }

   #Supplier
   type SupplierResponse implements MutationResponse {
      success: Boolean!
      message: String!
      supplier: Supplier
   }

   #Purchase order
   type PurchaseOrderResponse implements MutationResponse {
      success: Boolean!
      message: String!
      purchaseOrder: PurchaseOrder
   }

   #Work Order
   type WorkOrderResponse implements MutationResponse {
      success: Boolean!
      message: String!
      workOrder: WorkOrder
   }

   #Supplier Item
   type SupplierItemResponse implements MutationResponse {
      success: Boolean!
      message: String!
      supplierItem: SupplierItem
   }

   #Supplier Item Processing
   type SupplierItemProcessingResponse implements MutationResponse {
      success: Boolean!
      message: String!
      supplierItemProcessing: SupplierItemProcessing
   }

   #Supplier Item Processing Sachets
   type SupplierItemProcessingSachetsResponse implements MutationResponse {
      success: Boolean!
      message: String!
      supplierItemProcessingSachets: SupplierItemProcessingSachets
   }
   type Mutation {
      createRecipe(id: ID!): RecipeResponse

      #Supplier
      createSupplier(input: SupplierInput): SupplierResponse
      updateSupplier(id: ID!, input: SupplierInput): SupplierResponse
      deleteSupplier(id: ID!): SupplierResponse

      #Purchase Order
      createPurchaseOrder(input: PurchaseOrderInput): PurchaseOrderResponse
      updatePurchaseOrder(
         id: ID!
         input: PurchaseOrderInput
      ): PurchaseOrderResponse
      deletePurchaseOrder(id: ID!): PurchaseOrderResponse

      #Work order
      createWorkOrder(input: WorkOrderInput): WorkOrderResponse
      updateWorkOrder(id: ID!, input: WorkOrderInput): WorkOrderResponse
      deleteWorkOrder(id: ID!): WorkOrderResponse

      #Supplier Item
      createSupplierItem(input: SupplierItemInput): SupplierItemResponse
      updateSupplierItem(
         id: ID!
         input: SupplierItemInput
      ): SupplierItemResponse
      deleteSupplierItem(id: ID!): SupplierItemResponse

      #Supplier Item Processing
      createItemProcessing(
         input: SupplierItemProcessingInput
      ): SupplierItemProcessingResponse
      updateItemProcessing(
         id: ID!
         input: SupplierItemProcessingInput
      ): SupplierItemProcessingResponse
      deleteItemProcessing(id: ID!): SupplierItemProcessingResponse

      #Supplier Item Processing sachets
      createSachetItem(
         input: SupplierItemProcessingSachetsInput
      ): SupplierItemProcessingSachetsResponse
      updateSachetItem(
         id: ID!
         input: SupplierItemProcessingSachetsInput
      ): SupplierItemProcessingSachetsResponse
      deleteSachetItem(id: ID!): SupplierItemProcessingSachetsResponse
   }
`
