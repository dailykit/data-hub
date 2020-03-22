module.exports = {
   Query: {
      sachets: async (parent, args, { models }) => {
         try {
            const { Sachet } = models
            const sachets = await Sachet.find({})
            return sachets
         } catch (error) {
            return error.message
         }
      },
      sachet: async (parent, { id }, { models }) => {
         try {
            const { Sachet } = models
            const sachet = await Sachet.find(id)
            return sachet
         } catch (error) {
            return error.message
         }
      }
   }
}
