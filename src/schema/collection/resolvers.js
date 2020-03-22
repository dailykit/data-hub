module.exports = {
   Query: {
      collections: async (parent, args, { models }) => {
         try {
            const { Collection } = models
            const collections = await Collection.find({})
            return collections
         } catch (error) {
            return error.message
         }
      },
      collection: async (parent, { id }, { models }) => {
         try {
            const { Collection } = models
            const collection = await Collection.find(id)
            return collection
         } catch (error) {
            return error.message
         }
      }
   }
}
