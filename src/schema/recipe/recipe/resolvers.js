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
      },
      recipe: async (parent, { id }, { models }) => {
         try {
            const { Recipe } = models
            const recipe = await Recipe.find(id)
            return recipe
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {}
}
