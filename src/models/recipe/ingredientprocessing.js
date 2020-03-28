import mongoose from 'mongoose'

const IngredientProcessingSchema = new mongoose.Schema(
   {
      isValid: {
         type: Boolean,
         default: false
      },
      name: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'ProcessingName'
      },
      sachets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sachet'
         }
      ],
      recipes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'recipe'
         }
      ]
   },
   {
      timestamps: true
   }
)

export default mongoose.model(
   'IngredientProcessing',
   IngredientProcessingSchema
)
