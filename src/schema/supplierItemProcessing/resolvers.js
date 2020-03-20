module.exports = {
   Query: {
      getSupplierItemProcessing: async (parent, args, { models }) => {
         try {
            const { SupplierItemProcessing } = models
            const itemProcessing = await SupplierItemProcessing.find({ id: args.id })
            return itemProcessing
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
