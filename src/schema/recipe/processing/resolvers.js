module.exports = {
   Query: {
      processings: async (parent, args, { models }) => {
         try {
            const { Processing } = models
            const processings = await Processing.find({})
            return processings
         } catch (error) {
            return error.message
         }
      },
      processing: async (parent, { id }, { models }) => {
         try {
            const { Processing } = models
            const processing = await Processing.find(id)
            return processing
         } catch (error) {
            return error.message
         }
      }
   }
}
