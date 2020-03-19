const { gql } = require('apollo-server-express')

module.exports = gql`
   type WorkOrder{
      id: ID!
      inputInventory: SupplierItemProcessing
      inputQuantity: ValueFloat
      outputQuantity: OutputQuantity
      scheduledTime: String
      status: String
      timestampForStatus: TimestampForStatusWorkOrder
      createdAt: String
      updatedAt: String
   }
   type OutputQuantity{
      bulk: SupplierItemProcessing
      sachets: SupplierItemProcessingSachets
   }
   type TimestampForStatusWorkOrder{
      pending: String
      completed: String
   }

   input WorkOrderInput{
      inputInventory: SupplierItemProcessingInput
      inputQuantity: ValueFloatInput
      outputQuantity: OutputQuantityInput
      scheduledTime: String
      status: String
      timestampForStatus: TimestampForStatusWorkOrderInput
      createdAt: String
      updatedAt: String
   }
   input OutputQuantityInput{
      bulk: SupplierItemProcessingInput
      sachets: SupplierItemProcessingSachetsInput
   }
   input TimestampForStatusWorkOrderInput{
      pending: String
      completed: String
   }
`
