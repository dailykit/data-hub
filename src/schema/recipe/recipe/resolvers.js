module.exports = {
   Recipe: {
      allergens: async (parent, _, { models }) => {
         try {
            const { Allergen } = models
            const allergens = await parent.allergens.map(id =>
               Allergen.findOne(id)
            )
            return allergens
         } catch (error) {
            return error.message
         }
      }
   },
   IngredientItem: {
      ingredient: async (parent, _, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.findOne(parent.ingredient)
            return ingredient
         } catch (error) {
            return error.message
         }
      },
      processing: async (parent, _, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processing = await IngredientProcessing.findOne(
               parent.processing
            )
            return processing
         } catch (error) {
            return error.message
         }
      },
      sachet: async (parent, _, { models }) => {
         try {
            const { Sachet } = models
            const sachet = await Sachet.findOne(parent.sachet)
            return sachet
         } catch (error) {
            return error.message
         }
      }
   },
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
            const recipe = await Recipe.findOne({ _id: id })
            return recipe
         } catch (error) {
            return error.message
         }
      }
   }
}
