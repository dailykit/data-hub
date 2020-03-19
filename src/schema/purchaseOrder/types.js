const { gql } = require('apollo-server-express')

module.exports = gql`
   type ValueFloat{
     value: Float
     unit: String
   }
   type ValueInt{
      value: Int
      unit: String
   } 
   type PurchaseOrder{
      id: ID!
      supplier:Supplier!
      orderedItems:[OrderedItems]
      status: Status
      createdAt: String
      updatedAt: String
   } 
   type Status {
      order: String
      timestampForOrder: TimestampForOrder
      payment: String
      timestampForPayment: TimestampForPayment
   }
   type TimestampForOrder{
      pending_confirmation: String
      draft: String
      completed: String
      fulfilled: String
   }
   type TimestampForPayment{
      unpaid: String
      paid: String
      cancelled: String
   }
   type OrderedItems{
      id: ID!
      supplierItem: SupplierItem!
      ordered: ValueInt
      received: ValueFloat
      expectedDelivery: String
      deliveryStatus: String
      timestampForDeliveryStatus: TimestampForDeliveryStatus
   }
   type TimestampForDeliveryStatus{
      awaiting: String
      received: String
      cancelled: String
   }

   input PurchaseOrderInput{
      supplier:SupplierInput!
      orderedItems:[OrderedItemsInput]
      status: StatusInput
   }
   input OrderedItemsInput{
      supplierItem: SupplierItemInput!
      ordered: ValueIntInput
      received: ValueFloatInput
      expectedDelivery: String
      deliveryStatus: String
      timestampForDeliveryStatus: TimestampForDeliveryStatusInput  
   }
   input StatusInput{
      order: String
      timestampForOrder: TimestampForOrderInput
      payment: String
      timestampForPayment: TimestampForPaymentInput
   }
   input ValueFloatInput{
     value: Float
     unit: String
   }
   input ValueIntInput{
      value: Int
      unit: String
   } 
   input TimestampForDeliveryStatusInput{
      awaiting: String
      received: String
      cancelled: String
   }
   input TimestampForOrderInput{
      pending_confirmation: String
      draft: String
      completed: String
      fulfilled: String
   }
   input TimestampForPaymentInput{
      unpaid: String
      paid: String
      cancelled: String
   }
`


