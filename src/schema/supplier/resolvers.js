module.exports = {
   Query: {
      getSuppliers: async (parent, args, { models }) => {
         try {
            const { Supplier } = models
            const suppliers = await Supplier.find({})
            return suppliers
         } catch (error) {
            return error.message
         }
      },
      getSupplier: async (parent, args, { models }) => {
         try {
            const { Supplier } = models
            const supplier = await Supplier.find({ id: args.supplierId })
            return supplier
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
