module.exports = {
   IngredientProcessing: {
      name: async (parent, _, { models }) => {
         try {
            const { ProcessingName } = models
            const processingName = await ProcessingName.findOne(parent.name)
            return processingName
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
      },
      recipes: async (parent, _, { models }) => {
         try {
            const { Recipe } = models
            const recipes = await parent.recipes.map(recipe =>
               Recipe.findOne(recipe)
            )
            return recipes
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      processings: async (parent, args, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processings = await IngredientProcessing.find({})
            return processings
         } catch (error) {
            return error.message
         }
      },
      processing: async (parent, { id }, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processing = await IngredientProcessing.findOne({ _id: id })
            return processing
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createProcessings: async (_, { input }, { models }) => {
         try {
            const { IngredientProcessing, Ingredient } = models
            const processings = await input.processingNames.map(name => {
               const processing = new IngredientProcessing({
                  name
               })
               processing.save()
               return processing
            })
            await Ingredient.findOneAndUpdate(
               {
                  _id: input.ingredientId
               },
               {
                  $push: {
                     processings: { $each: processings }
                  }
               },
               {
                  new: true
               }
            )
            return processings
         } catch (error) {
            return error.message
         }
      },
      deleteProcessing: async (_, { input }, { models }) => {
         try {
            const { IngredientProcessing, Ingredient, Sachet } = models
            // This will be done using pre hook later
            const processing = await IngredientProcessing.findOne({
               _id: input.processingId
            })
            await Sachet.deleteMany({
               _id: { $in: processing.sachets }
            })
            await processing.remove()
            await Ingredient.findOneAndUpdate(
               {
                  _id: input.ingredientId
               },
               {
                  $pull: {
                     processings: input.processingId
                  }
               }
            )
            return {
               success: true,
               message: 'Processing deleted!',
               processing
            }
         } catch (error) {
            throw error.message
         }
      }
   }
}
