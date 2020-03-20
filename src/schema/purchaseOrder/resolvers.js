module.exports = {
   Query: {
      getPurchaseOrders: async (parent, args, { models }) => {
         try {
            const { PurchaseOrder } = models
            const orders = await PurchaseOrder.find({})
            return orders
         } catch (error) {
            return error.message
         }
      },
      getPurchaseOrderOfSupplier: async (parent, args, { models }) => {
         try {
            const { PurchaseOrder } = models
            const order = await PurchaseOrder.find({ supplier: args.supplierId })
            return order;
         } catch (error) {
            return error.message
         }
      },
      getOrderedItem: async (parent, args, { models }) => {
         try {
            const { PurchaseOrder } = models
            const orderedItem = await PurchaseOrder.find({ supplier: args.supplierId, "OrderedItem.id": args.orderedItemId })
            return orderedItem
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
