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
      }
   },
   Serving: {
      sachets: async (parent, _, { models }) => {
         try {
            const { Sachet } = models
            const sachets = await parent.sachets.map(sachet =>
               Sachet.findOne(sachet)
            )
            return sachets
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
   },
   Mutation: {
      createRecipe: async (_, { name }, { models }) => {
         try {
            const { Recipe } = models
            const recipe = await Recipe.create({ name })
            return {
               success: true,
               message: 'Recipe created successfully',
               recipe
            }
         } catch (error) {
            return error.message
         }
      },
      updateRecipe: async (_, { input }, { models }) => {
         try {
            const { Recipe } = models
            const recipe = await Recipe.findOneAndUpdate(
               {
                  _id: input.id
               },
               {
                  $set: {
                     name: input.name,
                     type: input.type,
                     cookingTime: input.cookingTime,
                     chef: input.chef,
                     description: input.description,
                     utensils: input.utensils,
                     ingredients: input.ingredients,
                     servings: input.servings,
                     procedures: input.procedures
                  }
               },
               {
                  new: true
               }
            )
            return {
               success: true,
               message: 'Recipe update successfully',
               recipe
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
