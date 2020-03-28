module.exports = {
   IngredientProcessing: {
      // This was throwing some error
      // processingName: async (parent, _, { models }) => {
      //    try {
      //       const { ProcessingName } = models
      //       const processingName = await ProcessingName.findOne(
      //          parent.processingName
      //       )
      //       return processingName
      //    } catch (error) {
      //       return error.message
      //    }
      // },
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
      },
      processingsOfIngredient: async (parent, { id }, { models }) => {
         try {
            const { Ingredient } = models
            const ingredient = await Ingredient.findOne({
               _id: id
            }).populate({
               path: 'processings',
               populate: {
                  path: 'name'
               }
            })
            return ingredient.processings
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createProcessings: async (_, { input }, { models }) => {
         try {
            const { Processing, Ingredient } = models
            const processings = await input.processingNames.map(name => {
               const processing = new Processing({
                  name
                  // sachets: []
               })
               processing.save()
               return processing._id
            })
            const ingredient = await Ingredient.findOneAndUpdate(
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
            ).populate({
               path: 'processings',
               populate: {
                  path: 'name'
               }
            })
            return ingredient.processings
         } catch (error) {
            return error.message
         }
      },
      deleteProcessing: async (_, { input }, { models }) => {
         try {
            const { Processing, Ingredient } = models
            // This will be done using pre hook later
            const processing = await Processing.findOne({
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
               // return id from deleted obj, later
               ID: input.processingId
            }
         } catch (error) {
            throw error.message
         }
      }
   }
}
