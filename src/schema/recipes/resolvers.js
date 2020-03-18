module.exports = {
   Query: {
      recipes: async (parent, args, { models }) => {
         try {
            const { Recipe } = models
            const recipes = await Recipe.find({})
            return recipes
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
