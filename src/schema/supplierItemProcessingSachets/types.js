const { gql } = require('apollo-server-express')

module.exports = gql`
   type SupplierItemProcessingSachets{
      id: ID!
      itemDetails: ItemDetails
      inventoryDetails: InventoryDetails
      createdAt: String
      updatedAt: String
   }
   type ItemDetails{
      unitQuantity: ValueFloat
      supplierItemProcessing: SupplierItemProcessing
   }
   type InventoryDetails{
      parLevel: ValueFloat
      maxInventoryLevel: ValueFloat
      status: String
      timestampForStatus: TimestampsForStatus
      onhandQuantity: ValueFloat
      isAvailable: Boolean
   }
   type TimestampsForStatus {
      below: String
      instock: String
      over: String
   }


   input SupplierItemProcessingSachetsInput{
      itemDetails: ItemDetailsInput
      inventoryDetails: InventoryDetailsInput
      createdAt: String
      updatedAt: String
   }
   input ItemDetailsInput{
      unitQuantity: ValueFloatInput
      supplierItemProcessing: SupplierItemProcessingInput
   }
   input InventoryDetailsInput{
      parLevel: ValueFloatInput
      maxInventoryLevel: ValueFloatInput
      status: String
      timestampForStatus: TimestampsForStatusInput
      onhandQuantity: ValueFloatInput
      isAvailable: Boolean
   }
   input TimestampsForStatusInput {
      below: String
      instock: String
      over: String
   }
`
