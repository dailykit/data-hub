module.exports = {
   Query: {
      utensils: async (parent, args, { models }) => {
         try {
            const { Utensil } = models
            const utensils = await Utensil.find({})
            return utensils
         } catch (error) {
            return error.message
         }
      },
      utensil: async (parent, { id }, { models }) => {
         try {
            const { Utensil } = models
            const utensil = await Utensil.findOne({ _id: id })
            return utensil
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createUtensil: (_, { title }, { models }) => {
         try {
            const { Utensil } = models
            const utensil = Utensil.create({
               title
            })
            return {
               success: true,
               message: 'Added utensil successfully!',
               utensil
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
