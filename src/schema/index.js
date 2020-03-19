const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

const { types: RecipeTypes, resolvers: RecipeResolvers } = require('./recipes')
const { types: PurchaseOrderTypes, resolvers: PurchaseOrderResolvers } = require('./purchaseOrder')
const { types: SupplierTypes, resolvers: SupplierResolvers } = require('./supplier')
const { types: SupplierItemTypes, resolvers: SupplierItemResolvers } = require('./supplierItem')
const { types: SupplierItemProcessingTypes, resolvers: SupplierItemProcessingResolvers } = require('./supplierItemProcessing')
const { types: SupplierItemProcessingSachetsTypes, resolvers: SupplierItemProcessingSachetsResolvers } = require('./supplierItemProcessingSachets')
const { types: WorkOrderTypes, resolvers: WorkOrderResolvers } = require('./workOrder')

const Queries = require('./queries')
const Mutations = require('./mutations')
const ResponseResolvers = require('./responses')

module.exports = makeExecutableSchema({
   typeDefs: [Queries, Mutations, RecipeTypes, PurchaseOrderTypes, SupplierTypes, SupplierItemTypes, SupplierItemProcessingTypes, SupplierItemProcessingSachetsTypes, WorkOrderTypes],
   resolvers: merge(ResponseResolvers, RecipeResolvers, PurchaseOrderResolvers, SupplierResolvers, SupplierItemResolvers, SupplierItemProcessingResolvers, SupplierItemProcessingSachetsResolvers, WorkOrderResolvers)
})
