module.exports = {
   Query: {
      accompanimentTypes: async (_, __, { models }) => {
         try {
            const { AccompanimentType } = models
            const accos = await AccompanimentType.find({})
            return accos
         } catch (error) {
            return error.message
         }
      },
      accompanimentType: async (_, { id }, { models }) => {
         try {
            const { AccompanimentType } = models
            const acco = await AccompanimentType.findOne({ _id: id })
            return acco
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createAccompanimentType: async (_, { title }, { models }) => {
         try {
            const { AccompanimentType } = models
            const accompanimentType = await AccompanimentType.create({ title })
            return {
               success: true,
               message: 'Accompaniment type added successfully!',
               accompanimentType
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
