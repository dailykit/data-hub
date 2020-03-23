module.exports = {
   IngredientProcessing: {
      processingName: async (parent, _, { models }) => {
         try {
            const { ProcessingName } = models
            const processingName = await ProcessingName.findOne(
               parent.processingName
            )
            return processingName
         } catch (error) {
            return error.message
         }
      },
      sachets: async (parent, _, { models }) => {
         try {
            const { Sachet } = models
            const sachets = await parent.sachets.map(sachet =>
               Sachet.findOne(sachet)
            )
            return sachets
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      processings: async (parent, args, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processings = await IngredientProcessing.find({})
            return processings
         } catch (error) {
            return error.message
         }
      },
      processing: async (parent, { id }, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processing = await IngredientProcessing.find(id)
            return processing
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createProcessing: (_, { name }, { models }) => {
         try {
            const { IngredientProcessing } = models
            const response = IngredientProcessing.create({ name })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
