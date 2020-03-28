module.exports = {
   Query: {
      sachets: async (parent, args, { models }) => {
         try {
            const { Sachet } = models
            const sachets = await Sachet.find({})
            return sachets
         } catch (error) {
            return error.message
         }
      },
      sachet: async (parent, { id }, { models }) => {
         try {
            const { Sachet } = models
            const sachet = await Sachet.find(id)
            return sachet
         } catch (error) {
            return error.message
         }
      },
      sachetsOfProcessing: async (parent, { id }, { models }) => {
         try {
            const { IngredientProcessing } = models
            const processing = await IngredientProcessing.findOne({
               _id: id
            }).populate({
               path: 'sachets',
               populate: [
                  {
                     path: 'quantity.unit'
                  },
                  {
                     path: 'modes.station'
                  },
                  {
                     path: 'modes.supplierItems.item'
                  },
                  {
                     path: 'modes.supplierItems.packaging'
                  },
                  {
                     path: 'modes.supplierItems.labelTemplate'
                  }
               ]
            })
            return processing.sachets
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createSachet: async (_, { input }, { models }) => {
         try {
            const { Ingredient, IngredientProcessing, Sachet } = models
            const sachet = await Sachet.create(input.sachet)
            const processing = await IngredientProcessing.findOneAndUpdate(
               {
                  _id: input.processingId
               },
               {
                  $push: {
                     sachets: sachet._id
                  }
               },
               {
                  new: true
               }
            ).populate({
               path: 'sachets',
               populate: [
                  {
                     path: 'quantity.unit'
                  },
                  {
                     path: 'modes.station'
                  },
                  {
                     path: 'modes.supplierItems.item'
                  },
                  {
                     path: 'modes.supplierItems.packaging'
                  },
                  {
                     path: 'modes.supplierItems.labelTemplate'
                  }
               ]
            })
            await Ingredient.findOneAndUpdate(
               {
                  _id: input.ingredientId
               },
               {
                  $push: {
                     sachets: sachet._id
                  }
               }
            )
            return processing.sachets
         } catch (error) {
            return error.message
         }
      },
      deleteSachet: async (_, { input }, { models }) => {
         try {
            const { Ingredient, IngredientProcessing, Sachet } = models
            await Sachet.findOneAndDelete({ _id: input.sachetId })
            await Ingredient.findOneAndUpdate(
               { _id: input.ingredientId },
               {
                  $pull: {
                     sachets: input.sachetId
                  }
               }
            )
            await IngredientProcessing.findOneAndUpdate(
               { _id: input.processingId },
               {
                  $pull: {
                     sachets: input.sachetId
                  }
               }
            )
            return {
               success: true,
               message: 'Sachet removed!',
               ID: input.sachetId
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
