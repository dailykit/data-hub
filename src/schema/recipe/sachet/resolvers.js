module.exports = {
   Quantity: {
      unit: async (parent, _, { models }) => {
         try {
            const { Unit } = models
            const unit = await Unit.findOne(parent.unit)
            return unit
         } catch (error) {
            return error.message
         }
      }
   },
   Mode: {
      station: async (parent, _, { models }) => {
         try {
            const { Station } = models
            const station = await Station.findOne(parent.station)
            return station
         } catch (error) {
            return error.message
         }
      }
   },
   SachetItem: {
      item: async (parent, _, { models }) => {
         try {
            const { SupplierItem } = models
            const item = await SupplierItem.findOne(parent.item)
            return item
         } catch (error) {
            return error.message
         }
      },
      packaging: async (parent, _, { models }) => {
         try {
            const { Packaging } = models
            const packaging = await Packaging.findOne(parent.packaging)
            return packaging
         } catch (error) {
            return error.message
         }
      },
      labelTemplate: async (parent, _, { models }) => {
         try {
            const { LabelTemplate } = models
            const template = await LabelTemplate.findOne(parent.labelTemplate)
            return template
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      sachets: async (_, __, { models }) => {
         try {
            const { Sachet } = models
            const sachets = await Sachet.find({})
            return sachets
         } catch (error) {
            return error.message
         }
      },
      sachet: async (_, { id }, { models }) => {
         try {
            const { Sachet } = models
            const sachet = await Sachet.findOne({ _id: id })
            return sachet
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
            await IngredientProcessing.findOneAndUpdate(
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
            )
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
            return {
               success: true,
               message: 'Updated ingredient successfully',
               sachet
            }
         } catch (error) {
            return error.message
         }
      },
      deleteSachet: async (_, { input }, { models }) => {
         try {
            const { Ingredient, IngredientProcessing, Sachet } = models
            const sachet = await Sachet.findOneAndDelete({
               _id: input.sachetId
            })
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
               sachet
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
