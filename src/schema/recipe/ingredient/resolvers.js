module.exports = {
   Query: {
      ingredients: async (parent, args, { models }) => {
         try {
            const { Ingredient } = models
            const ingredients = await Ingredient.find({})
            return ingredients
         } catch (error) {
            return error.message
         }
      },
      ingredient: async (parent, { id }, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.find(id)
            return ingredient
         } catch (error) {
            return error.message
         }
      }
   }
}
