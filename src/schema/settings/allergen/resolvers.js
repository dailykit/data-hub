module.exports = {
   Query: {
      allergens: async (parent, args, { models }) => {
         try {
            const { Allergen } = models
            const allergens = await Allergen.find({})
            return allergens
         } catch (error) {
            return error.message
         }
      },
      allergen: async (parent, { id }, { models }) => {
         try {
            const { Allergen } = models
            const allergen = await Allergen.findOne({ _id: id })
            return allergen
         } catch (error) {
            return error.message
         }
      }
   }
}
