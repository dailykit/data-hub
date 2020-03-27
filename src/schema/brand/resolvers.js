module.exports = {
   Query: {
      brand: async (_, __, { models }) => {
         try {
            const { Brand } = models
            const response = await Brand.find({})
            return response[0]
         } catch (error) {
            return error.message
         }
      }
   }
}
