module.exports = {
   Query: {
      supplierItems: async (_, __, { models }) => {
         try {
            const { SupplierItem } = models
            const supplierItems = await SupplierItem.find()
            return supplierItems
         } catch (error) {
            return error.message
         }
      },
      supplierItem: async (_, { id }, { models }) => {
         try {
            const { SupplierItem } = models
            const supplierItem = await SupplierItem.find({ _id: id })
            return supplierItem
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createSupplierItem: async (_, { title }, { models }) => {
         try {
            const { SupplierItem } = models
            const response = await SupplierItem.create({ title })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
