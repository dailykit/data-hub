module.exports = {
   Query: {
      packagings: async (parent, args, { models }) => {
         try {
            const { Packaging } = models
            const packagings = await Packaging.find({})
            return packagings
         } catch (error) {
            return error.message
         }
      },
      packaging: async (parent, { id }, { models }) => {
         try {
            const { Packaging } = models
            const packaging = await Packaging.find({ _id: id })
            return packaging
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createPackaging: (_, { title }, { models }) => {
         try {
            const { Packaging } = models
            const response = Packaging.create({
               title
            })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}