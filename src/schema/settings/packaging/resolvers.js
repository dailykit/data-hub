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
            const packaging = await Packaging.findOne({ _id: id })
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
            const packaging = Packaging.create({
               title
            })
            return {
               success: true,
               message: 'Updated ingredient successfully',
               packaging
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
