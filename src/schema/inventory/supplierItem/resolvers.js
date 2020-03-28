module.exports = {
   Query: {},
   Mutation: {
      createSupplierItem: (_, { title }, { models }) => {
         try {
            const { SupplierItem } = models
            const response = SupplierItem.create({ title })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
