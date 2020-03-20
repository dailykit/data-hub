module.exports = {
   Query: {
      getSupplierItemsOfSupplier: async (parent, args, { models }) => {
         try {
            const { SupplierItem } = models
            const items = await SupplierItem.find({ supplier: args.supplierId })
            return items
         } catch (error) {
            return error.message
         }
      },
      getSupplierItem: async (parent, args, { models }) => {
         try {
            const { SupplierItem } = models
            const item = await SupplierItem.find({ id: args.id })
            return item
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
