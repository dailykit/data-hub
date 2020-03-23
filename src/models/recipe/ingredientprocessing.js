import mongoose from 'mongoose'

const IngredientProcessingSchema = new mongoose.Schema(
   {
      processingName: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'ProcessingName'
      },
      sachets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sachet'
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
