import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RecipeSchema = new Schema(
   {
      name: String,
      type: String,
      cookingTime: Number,
      chef: String,
      description: String,
      utensils: String,
      allergens: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Allergen'
         }
      ],
      servings: [
         {
            size: Number,
            ingredients: [
               {
                  ingredient: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'Ingredient'
                  },
                  processing: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'IngredientProcessing'
                  },
                  sachet: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'Sachet'
                  }
               }
            ]
         }
      ],
      procedures: [
         {
            name: String,
            steps: [
               {
                  title: String,
                  description: String,
                  images: [String],
                  videos: [String]
               }
            ]
         }
      ]
   },
   { timestamps: true }
)

export default mongoose.model('recipe', RecipeSchema)
