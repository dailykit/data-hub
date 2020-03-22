import mongoose from 'mongoose'

const IngredientSchema = new mongoose.Schema(
   {
      name: String,
      processings: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Processing'
         }
      ]
   },
   {
      timestamps: true
   }
)

export default mongoose.model('Ingredient', IngredientSchema)
