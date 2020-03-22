import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RecipeSchema = new Schema(
   {
      name: String,
      type: String,
      ingredients: [
         {
            ingredient: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Ingredient'
            },
            processing: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Processing'
            },
            sachet: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Sachet'
            }
         }
      ],
      cookingProcess: [
         {
            description: String
         }
      ]
   },
   { timestamps: true }
)

export default mongoose.model('recipe', RecipeSchema)
