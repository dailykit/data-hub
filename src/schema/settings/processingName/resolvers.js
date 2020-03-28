module.exports = {
   Query: {
      processingNames: async (parent, args, { models }) => {
         try {
            const { ProcessingName } = models
            const processingNames = await ProcessingName.find({})
            return processingNames
         } catch (error) {
            return error.message
         }
      },
      processingName: async (parent, { id }, { models }) => {
         try {
            const { ProcessingName } = models
            const processingName = await ProcessingName.find(id)
            return processingName
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createProcessingName: (_, { title }, { models }) => {
         try {
            const { ProcessingName } = models
            const response = ProcessingName.create({
               title
            })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
