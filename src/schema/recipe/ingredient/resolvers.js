module.exports = {
   Ingredient: {
      processings: async (parent, _, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processings = await parent.processings.map(processing =>
               IngredientProcessing.findOne({ _id: processing })
            )
            return processings
         } catch (error) {
            return error.message
         }
      },
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
      ingredients: async (parent, args, { models }) => {
         try {
            const { Ingredient } = models
            const ingredients = await Ingredient.find()
            return ingredients
         } catch (error) {
            return error.message
         }
      },
      ingredient: async (parent, { id }, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.findOne({ _id: id })
            return ingredient
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createIngredient: async (_, { name }, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.create({ name })
            return {
               success: true,
               message: 'Created ingredient successfully',
               ingredient
            }
         } catch (error) {
            return error.message
         }
      },
      updateIngredient: async (_, { input }, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.findByIdAndUpdate(
               { _id: input.id },
               {
                  $set: {
                     name: input.name,
                     image: input.image
                  }
               },
               {
                  new: true
               }
            )
            return {
               success: true,
               message: 'Updated ingredient successfully',
               ingredient
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
