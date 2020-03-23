module.exports = {
   Query: {},
   Mutation: {
      createSupplierItem: (_, { name }, { models }) => {
         try {
            const { SupplierItem } = models
            const response = SupplierItem.create({ name })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
