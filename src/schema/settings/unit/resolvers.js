module.exports = {
   Query: {
      units: async (parent, args, { models }) => {
         try {
            const { Unit } = models
            const units = await Unit.find({})
            return units
         } catch (error) {
            return error.message
         }
      },
      unit: async (parent, { id }, { models }) => {
         try {
            const { Unit } = models
            const unit = await Unit.findOne({ _id: id })
            return unit
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createUnit: (_, { title }, { models }) => {
         try {
            const { Unit } = models
            const unit = Unit.create({
               title
            })
            return {
               success: true,
               message: 'Updated ingredient successfully',
               unit
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
