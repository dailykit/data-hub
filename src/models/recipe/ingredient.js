import mongoose from 'mongoose'

const IngredientSchema = new mongoose.Schema(
   {
      isValid: {
         type: Boolean,
         default: false
      },
      isPublished: {
         type: Boolean,
         default: false
      },
      name: {
         type: String,
         required: ['Ingredient name is required.']
      },
      image: {
         type: String
      },
      processings: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'IngredientProcessing'
         }
      ],
      // Let this be here, you won't regret it
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

export default mongoose.model('Ingredient', IngredientSchema)
