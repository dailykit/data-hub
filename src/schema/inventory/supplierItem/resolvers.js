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
            const supplierItem = await SupplierItem.findOne({ _id: id })
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
            const supplierItem = await SupplierItem.create({ title })
            return {
               success: true,
               message: 'Create Supplier Item',
               supplierItem
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
