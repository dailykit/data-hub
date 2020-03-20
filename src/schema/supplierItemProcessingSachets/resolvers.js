module.exports = {
   Query: {
      getSupplierItemProcessingSachet: async (parent, args, { models }) => {
         try {
            const { SupplierItemProcessingSachets } = models
            const itemProcessingSachet = await SupplierItemProcessingSachets.find({ id: args.id })
            return itemProcessingSachet
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
