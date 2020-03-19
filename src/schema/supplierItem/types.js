const { gql } = require('apollo-server-express')

module.exports = gql`
  type SupplierItem{
      id: ID!
      name: String
      supplier: Supplier!
      sku: String
      details: ItemDetailsOfSupplier
      certificates: [String]
      shippingDetails: ShippingDetails
      createdAt: String
      updatedAt: String
   }
   type ItemDetailsOfSupplier{
      unitSize: ValueFloat
      unitPrice: ValueFloat
   }
   type ShippingDetails{
      caseQuantity: ValueInt
      minOrderValue: ValueFloat
      leadTime: ValueInt
   }

   input SupplierItemInput{
      name: String
      supplier: SupplierInput!
      sku: String
      details: ItemDetailsOfSupplierInput
      certificates: [String]
      shippingDetails: ShippingDetailsInput
      createdAt: String
      updatedAt: String
   }
   input ItemDetailsOfSupplierInput{
      unitSize: ValueFloatInput
      unitPrice: ValueFloatInput
   }
   input ShippingDetailsInput{
      caseQuantity: ValueIntInput
      minOrderValue: ValueFloatInput
      leadTime: ValueIntInput
   }

`
