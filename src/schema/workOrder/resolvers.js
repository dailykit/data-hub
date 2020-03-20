module.exports = {
   Query: {
      getWorkOrder: async (parent, args, { models }) => {
         try {
            const { WorkOrder } = models
            const workOrder = await WorkOrder.find({ id: args.id })
            return workOrder
         } catch (error) {
            return error.message
         }
      },
      getInventories: async (parent, args, { models }) => {
         try {
            const { WorkOrder } = models
            const inventories = await WorkOrder.find({})
            return inventories
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
